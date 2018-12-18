// @flow

import * as states from './states';
import * as actions from './actions';
import type { Reducer } from '../reducers';

export type Drafts =
  Reducer<states.Drafts,
    actions.DraftsUpdate>;
