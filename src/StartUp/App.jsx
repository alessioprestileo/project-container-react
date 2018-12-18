// @flow

import React from 'react';
import { Router } from 'react-router-dom';

import RootComponent from '../project/src/components/RootComponent/RootComponent';
import RouterHistoryHandler from '../shared/classes/RouterHistoryHandler';
import storeReadWrite from '../shared/storeReadWrite';
import * as actionCreators from '../redux/actions/actionCreators';
import * as actionCreatorsContainer from '../project/src/redux/actions/actionCreators';
import type { State as StoreState } from '../types/redux/states';

type Props = {
  storeActions: typeof actionCreators,
  storeState: StoreState,
};

class App extends React.Component<Props, null> {
  constructor(props: Props) {
    super(props);

    const { storeActions, storeState } = props;

    const copyOfStoreActions = { ...storeActions };
    const storeActionsContainer: typeof actionCreatorsContainer = (copyOfStoreActions: any);
    this.routerHistoryHandler = new RouterHistoryHandler(storeActionsContainer, storeState);
    this.pushLocationIfNotInStore();
  }

  pushLocationIfNotInStore = (): void => {
    const { storeActions, storeState } = this.props;
    const pathname = storeState.router.pathname.data;
    if (!pathname) {
      const windowPathname: string = window.location.pathname;
      storeActions.routerPathname({ data: windowPathname });
    }
  };

  routerHistoryHandler: RouterHistoryHandler;

  render() {
    return (
      <Router history={this.routerHistoryHandler.history}>
        <div className="app">
          <RootComponent />
        </div>
      </Router>
    );
  }
}

export default storeReadWrite(App);
