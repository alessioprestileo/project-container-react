// @flow

import type { Location } from 'react-router-dom';

import * as actionTypeVariables from '../../../redux/actions/system/actionTypes';
import type { ActionGeneric } from '../generics';
import type { EnvSettings as EnvSettingsData } from '../../../project/src/types/general';

export type ApiCallFailure =
  ActionGeneric<typeof actionTypeVariables.SYSTEM_APICALLFAILURE,
  Object>;

export type EnvSettings =
  ActionGeneric<typeof actionTypeVariables.SYSTEM_ENVSETTINGS,
  EnvSettingsData>;

export type RouterLocation =
  ActionGeneric<typeof actionTypeVariables.SYSTEM_ROUTERLOCATION,
  Location>;

export type Styles =
  ActionGeneric<typeof actionTypeVariables.SYSTEM_STYLES,
  Object>;

export type ZerpLegacyMode =
  ActionGeneric<typeof actionTypeVariables.SYSTEM_ZERPLEGACYMODE,
  boolean>;

export type Action =
  | ApiCallFailure
  | EnvSettings
  | RouterLocation
  | Styles
  | ZerpLegacyMode;
