// @flow

import type { ApiCallFailure } from '../../../types/redux/system/reducers';
import initialState from '../../../project/src/initialState';
import { SYSTEM_APICALLFAILURE } from '../../actions/system/actionTypes';

const apiCallFailure: ApiCallFailure = (state = initialState.system.apiCallFailure, action) => {
  switch (action.type) {
    case SYSTEM_APICALLFAILURE:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default apiCallFailure;
