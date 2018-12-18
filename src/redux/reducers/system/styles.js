// @flow

import initialState from '../../../project/src/initialState';
import { SYSTEM_STYLES } from '../../actions/system/actionTypes';
import type { Styles } from '../../../types/redux/system/reducers';

const styles: Styles = (state = initialState.system.styles, action) => {
  switch (action.type) {
    case SYSTEM_STYLES:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default styles;
