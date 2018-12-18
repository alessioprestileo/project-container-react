// @flow

import initialState from '../../../project/src/initialState';
import { SINGLETONS_MFB } from '../../actions/singletons/actionTypes';
import type { Fab } from '../../../types/redux/singletons/reducers';

const mfb: Fab = (state = initialState.singletons.mfb, action) => {
  switch (action.type) {
    case SINGLETONS_MFB:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default mfb;
