// @flow

import * as actions from '../../../types/redux/forms/actions';
import * as actionTypeVariables from './actionTypes';

type DraftsUpdatePayload = $PropertyType<actions.DraftsUpdate, 'payload'>;

export const formsDraftsUpdate = // eslint-disable-line import/prefer-default-export
  (payload: DraftsUpdatePayload): actions.DraftsUpdate => ({
    type: actionTypeVariables.FORMS_DRAFTS_UPDATE,
    payload,
  });
