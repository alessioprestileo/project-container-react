// @flow

import * as actions from '../../../types/redux/router/actions';
import * as actionTypeVariables from './actionTypes';

type HistoryPayload = $PropertyType<actions.History, 'payload'>;

export const routerHistory =
  (payload: HistoryPayload): actions.History => ({
    type: actionTypeVariables.ROUTER_HISTORY,
    payload,
  });

type NavigationBlockersListAddPayload = $PropertyType<actions.NavigationBlockersListAdd, 'payload'>;

export const routerNavigationBlockersListAdd =
  (payload: NavigationBlockersListAddPayload): actions.NavigationBlockersListAdd => ({
    type: actionTypeVariables.ROUTER_NAVIGATIONBLOCKERSLISTADD,
    payload,
  });

type NavigationBlockersListRemovePayload = $PropertyType<actions.NavigationBlockersListRemove, 'payload'>;

export const routerNavigationBlockersListRemove =
  (payload: NavigationBlockersListRemovePayload): actions.NavigationBlockersListRemove => ({
    type: actionTypeVariables.ROUTER_NAVIGATIONBLOCKERSLISTREMOVE,
    payload,
  });

type NavigationHasCheckPayload = $PropertyType<actions.NavigationHasCheck, 'payload'>;

export const routerNavigationHasCheck =
  (payload: NavigationHasCheckPayload): actions.NavigationHasCheck => ({
    type: actionTypeVariables.ROUTER_NAVIGATIONHASCHECK,
    payload,
  });

type NavigationIsBlockedPayload = $PropertyType<actions.NavigationIsBlocked, 'payload'>;

export const routerNavigationIsBlocked =
  (payload: NavigationIsBlockedPayload): actions.NavigationIsBlocked => ({
    type: actionTypeVariables.ROUTER_NAVIGATIONISBLOCKED,
    payload,
  });

type NavigationRemoveCheckPayload = $PropertyType<actions.NavigationRemoveCheck, 'payload'>;

export const routerNavigationRemoveCheck =
  (payload: NavigationRemoveCheckPayload): actions.NavigationRemoveCheck => ({
    type: actionTypeVariables.ROUTER_NAVIGATIONREMOVECHECK,
    payload,
  });

type NavigationUrlAfterUnblockedPayload = $PropertyType<actions.NavigationUrlAfterUnblocked, 'payload'>;

export const routerNavigationUrlAfterUnblocked =
  (payload: NavigationUrlAfterUnblockedPayload): actions.NavigationUrlAfterUnblocked => ({
    type: actionTypeVariables.ROUTER_NAVIGATIONURLAFTERUNBLOCKED,
    payload,
  });

type PathnamePayload = $PropertyType<actions.Pathname, 'payload'>;

export const routerPathname =
  (payload: PathnamePayload): actions.Pathname => ({
    type: actionTypeVariables.ROUTER_PATHNAME,
    payload,
  });
