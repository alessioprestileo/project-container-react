// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../../types/redux/forms/actions';
import drafts from './drafts';

const draftsReducer: CombinedReducer<any, Action> = combineReducers({
  drafts,
});

export default draftsReducer;
