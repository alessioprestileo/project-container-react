// @flow

import initialState from '../../../project/src/initialState';
import { SINGLETONS_TOPACTIONBAR_PUSH } from '../../actions/singletons/actionTypes';
import type { TopActionbar } from '../../../types/redux/singletons/reducers';

const topActionbar: TopActionbar = (state = initialState.singletons.topActionbar, action) => {
  switch (action.type) {
    case SINGLETONS_TOPACTIONBAR_PUSH:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default topActionbar;
