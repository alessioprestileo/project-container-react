// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../../types/redux/system/actions';
import apiCallFailure from './apiCallFailure';
import envSettings from './envSettings';
import styles from './styles';
import zerpLegacyMode from './zerpLegacyMode';

const systemReducer: CombinedReducer<any, Action> = combineReducers({
  apiCallFailure,
  envSettings,
  styles,
  zerpLegacyMode,
});

export default systemReducer;
