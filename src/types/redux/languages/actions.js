// @flow

import * as states from './states';
import * as actionTypeVariables from '../../../redux/actions/languages/actionTypes';
import type { ActionGeneric } from '../generics';

export type All =
  ActionGeneric<typeof actionTypeVariables.LANGUAGES_ALL,
  Array<states.AllData>>;

export type AllFetching =
  ActionGeneric<typeof actionTypeVariables.LANGUAGES_ALL_FETCHING,
  boolean>;

export type Action =
  | All
  | AllFetching;
