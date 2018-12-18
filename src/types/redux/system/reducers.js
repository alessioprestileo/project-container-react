// @flow

import * as states from './states';
import * as actions from './actions';
import type { Reducer } from '../reducers';

export type ApiCallFailure =
  Reducer<states.ApiCallFailure,
    actions.ApiCallFailure>;

export type EnvSettings =
  Reducer<states.EnvSettings,
    actions.EnvSettings>;

export type Styles =
  Reducer<states.Styles,
    actions.Styles>;

export type ZerpLegacyMode =
  Reducer<states.ZerpLegacyMode,
    actions.ZerpLegacyMode>;
