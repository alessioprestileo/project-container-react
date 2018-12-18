// @flow

import createBrowserHistory from 'history/createBrowserHistory';

import * as actionCreators from '../../redux/actions/actionCreators';
import type { BrowserHistoryBuildOptions, RouterHistory } from '../../types/router';
import type { State as StoreState } from '../../types/redux/states';

class RouterHistoryHandler {
  constructor(storeActions: typeof actionCreators, storeState: StoreState) {
    this.storeActions = storeActions;
    this.storeState = storeState;

    this.history = this.createHistory();
    this.addHistoryListener();
    this.pushHistoryToStore();
  }

  addHistoryListener = (): void => {
    this.history.listen((location) => {
      this.storeActions.routerPathname({ data: location.pathname });
    });
  };

  createHistory = (options?: BrowserHistoryBuildOptions): RouterHistory =>
    createBrowserHistory(options);

  pushHistoryToStore = (): void => {
    this.storeActions.routerHistory({ data: this.history });
  };

  +history: RouterHistory;
  +storeActions: typeof actionCreators;
  +storeState: StoreState;
}

export default RouterHistoryHandler;
