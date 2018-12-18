// @flow

import { createStore } from 'redux';

import topReducer from '../project/src/redux/reducers';
import initialState from '../project/src/initialState';
import * as storeActions from '../redux/actions/actionCreators';
import offlineLabels from '../project/src/shared/offlineLabels';
import type { EnvSettings } from '../project/src/types/general';
import * as styles from '../shared/styles';

export const initializeStore = (envSettings: EnvSettings) => { // eslint-disable-line import/prefer-default-export, max-len
  const configureStore = initState => createStore(topReducer, initState);
  const store = configureStore(initialState);

  store.dispatch(storeActions.windowSizeCurrent({
    data: {
      height: window.innerHeight,
      width: window.innerWidth,
    },
  }));

  // $FlowFixMe
  if (styles.breakPointDesktop && styles.breakPointTablet) {
    const widthBreakPoints = {
      desktop: parseInt(styles.breakPointDesktop.replace('px', ''), 10),
      tablet: parseInt(styles.breakPointTablet.replace('px', ''), 10),
    };

    store.dispatch(storeActions.windowSizeWidthBreakPoints({
      data: widthBreakPoints,
    }));
  }

  window.addEventListener('resize', (event) => {
    store.dispatch(storeActions.windowSizeCurrent({
      data: {
        height: event.target.innerHeight,
        width: event.target.innerWidth,
      },
    }));
  });

  store.dispatch(storeActions.systemEnvSettings({ data: envSettings }));
  store.dispatch(storeActions.systemStyles({ data: styles }));
  store.dispatch(storeActions.translationOfflineLabels({ data: offlineLabels }));

  return store;
};
