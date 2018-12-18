// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../types/redux/actions';
import forms from './forms';
import languages from './languages';
import router from './router';
import system from './system';
import translation from './translation';

const topReducer: CombinedReducer<any, Action> = combineReducers({
  forms,
  languages,
  router,
  system,
  translation,
});

export default topReducer;
