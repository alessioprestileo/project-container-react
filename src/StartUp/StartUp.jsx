// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { initializeStore } from './functions';
import App from './App';
import type { EnvSettings } from '../project/src/types/general';

const StartUp = (envSettings: EnvSettings) => {
  const store = initializeStore(envSettings);
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      // $FlowFixMe
      document.getElementById('root'),
    );
  };

  render(App);

  // Webpack Hot Module Replacement API
  // $FlowFixMe
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./App', () => {
      render(require('./App').default); // eslint-disable-line global-require
    });
  }
};

export default StartUp;
