// @flow

import * as states from './states';
import * as actions from './actions';
import type { Reducer } from '../reducers';

export type History =
  Reducer<states.History,
    actions.History>;

export type Navigation =
  Reducer<states.Navigation,
    actions.NavigationBlockersListAdd |
    actions.NavigationBlockersListRemove |
    actions.NavigationHasCheck |
    actions.NavigationIsBlocked |
    actions.NavigationRemoveCheck |
    actions.NavigationUrlAfterUnblocked>;

export type Pathname =
    Reducer<states.Pathname,
      actions.Pathname>;
