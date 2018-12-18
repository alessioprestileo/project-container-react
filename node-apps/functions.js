// @flow

import envSettings from '../src/project/env-settings/private.env-settings.node'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

export const postProcessResponse = (proxyObj: Object, callback: Function) => {
  const remoteLocation = envSettings.REMOTE_LOCATION;
  const localLocation = envSettings.LOCAL_LOCATION;
  const { result } = proxyObj;

  if (
    result
    && result.response
    && result.response.headers.location
    && result.response.headers.location.startsWith(remoteLocation)
  ) {
    const newLocation =
      result.response.headers.location.replace(remoteLocation, localLocation);
    result.response.headers.location = newLocation;
    proxyObj.res.location(newLocation);
  }

  return callback();
};

export const preProcessRequest = (proxyObj: Object, callback: Function) => {
  const remoteLocation = envSettings.REMOTE_LOCATION;
  const localLocation = envSettings.LOCAL_LOCATION;
  const { req, reqOpts } = proxyObj;

  if (req.headers.referer) {
    reqOpts.headers.referer = req.headers.referer.replace(localLocation, remoteLocation);
  }

  if (req.headers.origin) {
    reqOpts.headers.origin = remoteLocation;
  }

  if (req.headers['content-type'] && req.headers['content-type'] === 'application/json') {
    reqOpts.headers['content-type'] = 'application/json;charset=UTF-8';
  }

  if (
    req.url.substring(0, 9) === '/core-api' &&
    (
      req.method === 'POST' ||
      req.method === 'PATCH'
    )
  ) {
    reqOpts.headers.accept = 'application/hal+json';
  } else if (
    req.url.substring(0, 9) === '/settings' &&
    (
      req.method === 'POST' ||
      req.method === 'PATCH'
    )
  ) {
    reqOpts.headers.accept = 'application/json';
  }

  reqOpts.headers.host = envSettings.CORE_PROXY_TARGET_DEV;

  reqOpts.json = true;
  reqOpts.body = req.body;

  return callback();
};
