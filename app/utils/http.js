import fetch from 'isomorphic-fetch';
import queryString from 'querystring';
import fetchJsonp from 'fetch-jsonp';

export function post(url, data, useJSON = true) {
    const contentType = useJSON ? 'application/json' : 'application/x-www-form-urlencoded';
    const stringifyFn = useJSON ? JSON.stringify : queryString.stringify;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': contentType
        },
        // credentials: 'include',
        body: stringifyFn(data)
    })
}

export function get(url, data) {
    //某些情况下，比如后端接口最后一个'/'后面是一个动态值，不能加？，否则会报404
    const query = data ? queryString.stringify(data) : "";
    return fetch(`${url}${query ? '?' + query : "" }`, {credentials: 'include'})
}

export function del(url, data) {
    return fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(data),
        credentials: 'include'
    })
}

export function put(url, data) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        // credentials: 'include',
        body: typeof(data) === 'string' ? data : JSON.stringify(data)
    })
}

export function jsonp(url, data) {
    return fetchJsonp(url + '?' + queryString.stringify(data))
}