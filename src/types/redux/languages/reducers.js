// @flow

import type { Reducer } from '../reducers';
import * as states from './states';
import * as actions from './actions';

export type All =
  Reducer<states.All,
    actions.All | actions.AllFetching>;
