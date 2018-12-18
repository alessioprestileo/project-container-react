// @flow

import bodyParser from 'body-parser'; // eslint-disable-line import/no-extraneous-dependencies
import express from 'express';
import path from 'path';

import envSettings from '../src/project/env-settings/private.env-settings.node';
import ProxyManager from './ProxyManager';

const buildServer = (rootDirectory: string) => {
  const app = express();
  const port = 3000;
  const directory = 'build_prod';

  app.use(express.static(path.join(rootDirectory, `/${directory}`)));
  app.set('port', process.env.PORT || port);

  ProxyManager.createProxy(
    app,
    envSettings,
    'CORE',
    'PROD',
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

  app.listen(app.get('port'));
};

export default buildServer;
