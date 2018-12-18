// @flow

/* eslint-env jest */
/* eslint-disable import/no-extraneous-dependencies */

import * as functions from './functions';
import { getCurrentTranslations } from '../redux/getters/translation';
import offlineLabels from '../project/src/shared/offlineLabels';

describe('getCurrentTranslations', () => {
  const inputs = [
    {
      translation: {
        currentTranslations: {
          data: offlineLabels,
        },
        offlineLabels: {
          data: offlineLabels,
        },
      },
    },
    {
      translation: {
        currentTranslations: {
          data: null,
        },
        offlineLabels: {
          data: offlineLabels,
        },
      },
    },
    {
      translation: {
        offlineLabels: {
          data: null,
        },
      },
    },
  ];

  // $FlowFixMe
  it.each(inputs)(
    'matches the snapshot for different inputs',
    (input) => {
      expect(getCurrentTranslations(input)).toMatchSnapshot();
    },
  );
});

describe('objectToUrlencoded', () => {
  const inputs = [
    {
      userName: 'username@me.com',
      password: 'password',
    },
    {},
    null,
  ];

  // $FlowFixMe
  it.each(inputs)(
    'matches the snapshot for different inputs',
    (input) => {
      expect(functions.objectToUrlencoded(input)).toMatchSnapshot();
    },
  );
});

describe('redirectNotAuthorizedToLogin', () => {
  const inputs = [
    200,
    401,
    500,
  ];

  // $FlowFixMe
  it.each(inputs)(
    'matches the snapshot for different inputs',
    (input) => {
      expect(functions.redirectNotAuthorizedToLogin(input)).toMatchSnapshot();
    },
  );
});
