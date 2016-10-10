import { get, post } from '../../../app/utils/http.js';
import querystring from 'querystring';

// Github登陆模块   
class OAuth2 {

	constructor() {
		this.authUrl = 'https://github.com/login/oauth/authorize';
		this.tokenUrl = 'https://github.com/login/oauth/access_token';
		this.userInfoUrl = 'https://api.github.com/user';
		this.clientId = '85a777c4a850b8317186';
		this.clientSecret = 'e29e10c828932e4dfddbcb5f1a302526407f34d6';
		
		this.token = null;
		this.userInfo = null;
	}

	getAuthUrl(redirectUrl) {
		return (this.authUrl + '?client_id=' + this.clientId +
						'&state=' + parseInt(Math.random() * 1000000, 10) + 
						'&redirect_uri=' + redirectUrl);
	}

	exchangeCodeForToken(code) {
		const options = {
			code,
			client_id: this.clientId,
			client_secret: this.clientSecret
		}

		post(this.tokenUrl, options)
		.then( req => req.json() )
		.then( obj => {
			console.log(obj);
			console.log(obj.access_token);
			this.token = obj.access_token;

			// promise化更好？
			this.getUserInfo();
		});
	}

	getUserInfo() {
		if(this.userInfo) return;

		get(this.userInfoUrl, {access_token: this.token})
		.then( req => req.json() )
		.then( obj => {
			console.log(obj);
			this.userInfo = JSON.parse(obj);

			chrome.runtime.sendMessage({user: this.urseInfo});
		});
	}

	authorize() {
		if(this.userInfo) return;

		const redirectUrl = 'https://jphgojmfhbhdecmlkjphmjkgadnbkela.chromiumapp.org/index.html';
		const options			= {
			url: this.getAuthUrl(redirectUrl),
			interactive: true
		}

		chrome.identity.launchWebAuthFlow(options, redirectUrl => {
			// 提取code
			console.log(redirectUrl);
			const qusetionMarkIndex = redirectUrl.indexOf('?') + 1;
    	const code = querystring.parse(redirectUrl.substr(qusetionMarkIndex)).code;
    	console.log(code);
    	// 提取access_token
    	this.exchangeCodeForToken(code);
		});
	}

}

let oAuth = new OAuth2();


function notify(message) {
	console.log(message);
	switch(message.type) {
		case 'getUserInfo': 
			oAuth.authorize();
			break;
		case 'removeCachedToken': 
			oAuth.token = null;
			oAuth.userInfo = null;
			break;
	}
}

chrome.runtime.onMessage.addListener(notify);