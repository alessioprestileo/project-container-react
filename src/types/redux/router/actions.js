// @flow

import * as actionTypeVariables from '../../../redux/actions/router/actionTypes';
import type { ActionGeneric } from '../generics';
import type { NavigationBlocker, RouterHistory } from '../../router';

export type History =
  ActionGeneric<typeof actionTypeVariables.ROUTER_HISTORY,
  RouterHistory>;

export type NavigationBlockersListAdd =
  ActionGeneric<typeof actionTypeVariables.ROUTER_NAVIGATIONBLOCKERSLISTADD,
  NavigationBlocker>;

export type NavigationBlockersListRemove =
  ActionGeneric<typeof actionTypeVariables.ROUTER_NAVIGATIONBLOCKERSLISTREMOVE,
  string>;

export type NavigationHasCheck =
  ActionGeneric<typeof actionTypeVariables.ROUTER_NAVIGATIONHASCHECK,
  boolean>;

export type NavigationIsBlocked =
  ActionGeneric<typeof actionTypeVariables.ROUTER_NAVIGATIONISBLOCKED,
  boolean>;

export type NavigationRemoveCheck =
  ActionGeneric<typeof actionTypeVariables.ROUTER_NAVIGATIONREMOVECHECK,
  () => void>;

export type NavigationUrlAfterUnblocked =
  ActionGeneric<typeof actionTypeVariables.ROUTER_NAVIGATIONURLAFTERUNBLOCKED,
  string>;

export type Pathname =
  ActionGeneric<typeof actionTypeVariables.ROUTER_PATHNAME,
  string>;

export type Action =
  History |
  NavigationBlockersListAdd |
  NavigationBlockersListRemove |
  NavigationHasCheck |
  NavigationIsBlocked |
  NavigationRemoveCheck |
  NavigationUrlAfterUnblocked |
  Pathname;
