const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = (app) => {
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ];
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  const clientCompiler = webpack(clientConfig);
  app.use(
    webpackDevMiddleware(clientCompiler, {
      stats: {
        colors: true
      }
    })
  );
  app.use(webpackHotMiddleware(clientCompiler));
};
