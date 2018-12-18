// @flow

import proxy from 'http-proxy-middleware'; // eslint-disable-line import/no-extraneous-dependencies

import envSettingsImportedForType from '../src/project/env-settings/private.env-settings.node';

class ProxyManager {
  static createProxy = (
    app: express$Application,
    envSettings: typeof envSettingsImportedForType,
    service: 'CORE' | 'TRANSLATION',
    environment: 'DEV' | 'PROD',
  ): void => {
    switch (service) {
      case 'CORE':
        ProxyManager.createProxyCore(
          app,
          envSettings,
          environment,
        );
        break;
      case 'TRANSLATION':
        ProxyManager.createProxyTranslation(
          app,
          envSettings,
          environment,
        );
        break;
      default:
        (service: empty);
    }
  };

  static createProxyCore = (
    app: express$Application,
    envSettings: typeof envSettingsImportedForType,
    environment: 'DEV' | 'PROD',
  ): void => {
    switch (environment) {
      case 'DEV':
        ProxyManager.createProxyCoreDev(app, envSettings);
        break;
      case 'PROD':
        ProxyManager.createProxyCoreProd(app, envSettings);
        break;
      default:
        (environment: empty);
    }
  };

  static createProxyCoreDev = (
    app: express$Application,
    envSettings: typeof envSettingsImportedForType,
  ): void => {
    const config: proxy.Config = {
      target: envSettings.CORE_PROXY_TARGET_DEV,
      changeOrigin: true,
      pathRewrite: {
        '^/core-api': '',
      },
    };

    app.use(proxy(envSettings.CORE_PROXIED_PATHS, config));
  };

  static createProxyCoreProd = (
    app: express$Application,
    envSettings: typeof envSettingsImportedForType,
  ): void => {
    const config: proxy.Config = {
      target: envSettings.CORE_PROXY_TARGET_PROD,
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/core-api': '',
      },
    };

    app.use(proxy(envSettings.CORE_PROXIED_PATHS, config));
  };

  static createProxyTranslation = (
    app: express$Application,
    envSettings: typeof envSettingsImportedForType,
    environment: 'DEV' | 'PROD',
  ): void => {
    switch (environment) {
      case 'DEV':
        ProxyManager.createProxyTranslationDev(app, envSettings);
        break;
      case 'PROD':
        ProxyManager.createProxyTranslationProd(app, envSettings);
        break;
      default:
        (environment: empty);
    }
  };

  static createProxyTranslationDev = (
    app: express$Application,
    envSettings: typeof envSettingsImportedForType,
  ): void => {
    const config: proxy.Config = {
      target: envSettings.TRANSLATION_PROXY_TARGET_DEV,
      changeOrigin: true,
      pathRewrite: {
        '^/translation-api': '',
      },
    };

    app.use(proxy(envSettings.TRANSLATION_PROXIED_PATHS, config));
  };

  static createProxyTranslationProd = (
    app: express$Application,
    envSettings: typeof envSettingsImportedForType,
  ): void => {
    const config: proxy.Config = {
      target: envSettings.TRANSLATION_PROXY_TARGET_PROD,
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/translation-api': '',
      },
    };

    app.use(proxy(envSettings.TRANSLATION_PROXIED_PATHS, config));
  };
}

export default ProxyManager;
