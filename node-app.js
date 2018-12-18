// @flow

import buildServerLocalDev from './node-apps/app.local-dev';
import buildServerLocalProd from './node-apps/app.local-prod';
import buildServerTestCoverage from './node-apps/app.test-coverage';

const rootDirectory = __dirname;

switch (process.env.TARGET_SERVER) {
  case 'local-dev':
    buildServerLocalDev(rootDirectory);
    break;
  case 'local-prod':
    buildServerLocalProd(rootDirectory);
    break;
  case 'test-coverage':
    buildServerTestCoverage(rootDirectory);
    break;
  default:
    console.log('ERROR: couldn\'t recognize environment variable "TARGET_SERVER".');
}
