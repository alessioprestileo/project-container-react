const path = require('path');

const devConfig = require('./webpack-configurations/webpack.config.dev');
const prodConfig = require('./webpack-configurations/webpack.config.prod');
const deployEnvSettings = require('./src/project/env-settings/env-settings-deploy.react.js');

process.traceDeprecation = true;


module.exports = (env) => {
  const deployDirectory = 'build_deploy';

  switch (env.NODE_ENV) {
    case 'production':
      if (env.DEPLOY && env.DEPLOY === 'true') {
        prodConfig.externals['env-settings-react'] = JSON.stringify(deployEnvSettings);
        prodConfig.output.path = path.resolve(__dirname, deployDirectory);
        prodConfig.output.publicPath = '/react-dist/';
      }
      return prodConfig;
    case 'development':
      return devConfig;
    default:
      return devConfig;
  }
};
