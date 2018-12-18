// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../../types/redux/system/actions';
import contextMenu from './contextMenu';
import mfb from './mfb';
import modal from './modal';
import snackbar from './snackbar';
import topActionbar from './topActionbar';

const systemReducer: CombinedReducer<any, Action> = combineReducers({
  contextMenu,
  mfb,
  modal,
  snackbar,
  topActionbar,
});

export default systemReducer;
