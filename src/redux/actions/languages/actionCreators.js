// @flow

import * as actions from '../../../types/redux/languages/actions';
import * as actionTypeVariables from './actionTypes';

type AllPayload = $PropertyType<actions.All, 'payload'>;

export const languagesAll =
  (payload: AllPayload): actions.All => ({
    type: actionTypeVariables.LANGUAGES_ALL,
    payload,
  });

type AllFetchingPayload = $PropertyType<actions.AllFetching, 'payload'>;

export const languagesAllFetching =
  (payload: AllFetchingPayload): actions.AllFetching => ({
    type: actionTypeVariables.LANGUAGES_ALL_FETCHING,
    payload,
  });
