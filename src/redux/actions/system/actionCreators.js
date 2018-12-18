// @flow

import * as actions from '../../../types/redux/system/actions';
import * as actionTypeVariables from './actionTypes';

type ApiCallFailurePayload = $PropertyType<actions.ApiCallFailure, 'payload'>;

export const systemApiCallFailure =
  (payload: ApiCallFailurePayload): actions.ApiCallFailure => ({
    type: actionTypeVariables.SYSTEM_APICALLFAILURE,
    payload,
  });

type EnvSettingsPayload = $PropertyType<actions.EnvSettings, 'payload'>;

export const systemEnvSettings =
  (payload: EnvSettingsPayload): actions.EnvSettings => ({
    type: actionTypeVariables.SYSTEM_ENVSETTINGS,
    payload,
  });

type StylesPayload = $PropertyType<actions.Styles, 'payload'>;

export const systemStyles =
  (payload: StylesPayload): actions.Styles => ({
    type: actionTypeVariables.SYSTEM_STYLES,
    payload,
  });

type ZerpLegacyModePayload = $PropertyType<actions.ZerpLegacyMode, 'payload'>;

export const systemZerpLegacyMode =
  (payload: ZerpLegacyModePayload): actions.ZerpLegacyMode => ({
    type: actionTypeVariables.SYSTEM_ZERPLEGACYMODE,
    payload,
  });
