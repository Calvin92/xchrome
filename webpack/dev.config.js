const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const host = 'localhost';
const port = 3000;
const customPath = path.join(__dirname, './customPublicPath');
const hotScript = 'webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true';

const baseDevConfig = () => ({
  devtool: 'eval-cheap-module-source-map',
  entry: {
    app: [customPath, hotScript, path.join(__dirname, '../chrome/extension/app')],
    background: [customPath, hotScript, path.join(__dirname, '../chrome/extension/background')],
  },
  devMiddleware: {
    publicPath: `http://${host}:${port}/js`,
    stats: {
      colors: true
    },
    noInfo: true
  },
  hotMiddleware: {
    path: '/js/__webpack_hmr'
  },
  output: {
    path: path.join(__dirname, '../dev/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, '../app/components/theme/_theme.scss') + '";'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '../../app/components/fonts/materialicons',
        to: '../fonts/materialicons'
      },
      {
        from: '../../app/components/fonts/roboto',
        to: '../fonts/roboto'
      }
    ]),
    new ExtractTextPlugin('../css/[name].css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
    new webpack.DefinePlugin({
      __HOST__: `'${host}'`,
      __PORT__: port,
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.md', '.txt', '.json', '.scss'],
    alias: {
      'react-toolbox': path.resolve(__dirname, '../node_modules/react-toolbox/lib')
    },
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react-hmre']
      }
    }, {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
    }, {
      test: /\.(md)$/,
      loader: 'html!highlight!markdown'
    }, {
      test: /\.json$/,
      loader: 'json'
    },
    { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=[name]-[hash].[ext]' },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=../fonts/[name]-[hash].[ext]' }
    //{ test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name]-[hash].[ext]' }
    ]
  }
});

const injectPageConfig = baseDevConfig();
injectPageConfig.entry = [
  customPath,
  path.join(__dirname, '../chrome/extension/inject')
];
delete injectPageConfig.hotMiddleware;
delete injectPageConfig.module.loaders[0].query;
injectPageConfig.plugins.shift(); // remove HotModuleReplacementPlugin
injectPageConfig.output = {
  path: path.join(__dirname, '../dev/js'),
  filename: 'inject.bundle.js',
};
const appConfig = baseDevConfig();

module.exports = [
  injectPageConfig,
  appConfig
];
