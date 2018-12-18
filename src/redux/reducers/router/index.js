// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../../types/redux/router/actions';
import history from './history';
import navigation from './navigation';
import pathname from './pathname';

const routerReducer: CombinedReducer<any, Action> = combineReducers({
  history,
  navigation,
  pathname,
});

export default routerReducer;
