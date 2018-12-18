// @flow

import type { Current } from '../../../types/redux/windowSize/reducers';
import initialState from '../../../project/src/initialState';
import { WINDOWSIZE_CURRENT } from '../../actions/windowSize/actionTypes';

const current: Current =
  (state = initialState.windowSize.current, action) => {
    switch (action.type) {
      case WINDOWSIZE_CURRENT:
        return { ...state, data: action.payload.data };

      default:
        (action: empty);
        return state;
    }
  };

export default current;
