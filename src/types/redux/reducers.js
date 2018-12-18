// @flow

import * as states from './states';
import * as actions from './actions';

export type Reducer<S, A> = (S, A) => S;

export type TopReducer =
  Reducer<states.State,
    actions.Action>;
