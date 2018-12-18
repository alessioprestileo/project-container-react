// @flow

import initialState from '../../../project/src/initialState';
import { SYSTEM_ENVSETTINGS } from '../../actions/system/actionTypes';
import type { EnvSettings } from '../../../types/redux/system/reducers';

const envSettings: EnvSettings = (state = initialState.system.envSettings, action) => {
  switch (action.type) {
    case SYSTEM_ENVSETTINGS:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default envSettings;
