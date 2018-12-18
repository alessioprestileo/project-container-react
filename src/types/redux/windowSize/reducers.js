// @flow

import type { Reducer } from '../reducers';
import * as states from './states';
import * as actions from './actions';

export type Current =
  Reducer<states.Current,
    actions.Current>;

export type WidthBreakPoints =
  Reducer<states.WidthBreakPoints,
    actions.WidthBreakPoints>;
