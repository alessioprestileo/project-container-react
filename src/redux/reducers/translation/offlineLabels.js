// @flow

import type { OfflineLabels } from '../../../types/redux/translation/reducers';
import initialState from '../../../project/src/initialState';
import { TRANSLATION_OFFLINELABELS } from '../../actions/translation/actionTypes';

const offlineLabels: OfflineLabels =
  (state = initialState.translation.offlineLabels, action) => {
    switch (action.type) {
      case TRANSLATION_OFFLINELABELS:
        return { ...state, data: action.payload.data };

      default:
        (action: empty);
        return state;
    }
  };

export default offlineLabels;
