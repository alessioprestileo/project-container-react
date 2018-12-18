// @flow

import initialState from '../../../project/src/initialState';
import { SYSTEM_ZERPLEGACYMODE } from '../../actions/system/actionTypes';
import type { ZerpLegacyMode } from '../../../types/redux/system/reducers';

const zerpLegacyMode: ZerpLegacyMode = (state = initialState.system.zerpLegacyMode, action) => {
  switch (action.type) {
    case SYSTEM_ZERPLEGACYMODE:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default zerpLegacyMode;
