// @flow

import bodyParser from 'body-parser'; // eslint-disable-line import/no-extraneous-dependencies
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies

import webpackConfigFunc from '../webpack.config';
import envSettings from '../src/project/env-settings/private.env-settings.node';
import ProxyManager from './ProxyManager';

const buildServer = (rootDirectory: string) => {
  const app = express();
  const webpackConfig = webpackConfigFunc({ NODE_ENV: 'development' });
  const compiler = webpack(webpackConfig);
  const port = 3000;
  const directory = 'build_dev';

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));

  app.use(express.static(path.join(rootDirectory, `/${directory}`)));
  app.set('port', process.env.PORT || port);

  ProxyManager.createProxy(
    app,
    envSettings,
    'CORE',
    'DEV',
  );

  ProxyManager.createProxy(
    app,
    envSettings,
    'TRANSLATION',
    'DEV',
  );

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json({ type: 'application/json', limit: '50mb' }));

  app.get(
    '*',
    (req: $Subtype<express$Request>, res: express$Response) => {
      res.sendFile(path.join(rootDirectory, `/${directory}/index.html`));
    },
  );

  app.listen(app.get('port'), (err) => {
    if (err) {
      return console.error(err);
    }

    return console.log('Listening on port ', app.get('port'));
  });
};

export default buildServer;
