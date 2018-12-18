// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../../types/redux/languages/actions';
import all from './all';

const languages: CombinedReducer<any, Action> = combineReducers({
  all,
});

export default languages;
