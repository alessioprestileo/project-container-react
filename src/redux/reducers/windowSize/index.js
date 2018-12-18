// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../../types/redux/windowSize/actions';
import current from './current';
import widthBreakPoints from './widthBreakPoints';

const windowSize: CombinedReducer<any, Action> = combineReducers({
  current,
  widthBreakPoints,
});

export default windowSize;
