// @flow

import * as React from 'react';

import NavigationBarrier from './NavigationBarrier';
import * as actionCreators from '../../redux/actions/actionCreators';
import type { Navigation as StoreStateRouterNavigation } from '../../types/redux/router/states';
import type { NavigationBlocker } from '../../types/router';

const withNavigationBarrier = (WrappedComponent: React.ComponentType<any>) => (props: Object) => {
  const addNavigationBlocker = (
    storeAction: typeof actionCreators.routerNavigationBlockersListAdd,
    storeStateRouterNavigation: StoreStateRouterNavigation,
    blocker: NavigationBlocker,
  ): void => {
    const navigationBlockersList = storeStateRouterNavigation.blockersList.data;
    const alreadyPresent = !!navigationBlockersList.find(item => item.id === blocker.id);
    if (!alreadyPresent) {
      storeAction({ data: blocker });
    }
  };

  const removeNavigationBlocker = (
    storeAction: typeof actionCreators.routerNavigationBlockersListRemove,
    storeStateRouterNavigation: StoreStateRouterNavigation,
    blockerId: string,
  ): void => {
    const navigationBlockersList = storeStateRouterNavigation.blockersList.data;
    const isPresent = !!navigationBlockersList.find(item => item.id === blockerId);
    if (isPresent) {
      storeAction({ data: blockerId });
    }
  };

  return (
    <React.Fragment>
      <NavigationBarrier />
      <WrappedComponent
        {...props}
        addNavigationBlocker={addNavigationBlocker}
        removeNavigationBlocker={removeNavigationBlocker}
      />
    </React.Fragment>
  );
};

export default withNavigationBarrier;
