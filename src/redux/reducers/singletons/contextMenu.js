// @flow

import initialState from '../../../project/src/initialState';
import { SINGLETONS_CONTEXTMENU } from '../../actions/singletons/actionTypes';
import type { ContextMenu } from '../../../types/redux/singletons/reducers';

const contextMenu: ContextMenu = (state = initialState.singletons.contextMenu, action) => {
  switch (action.type) {
    case SINGLETONS_CONTEXTMENU:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default contextMenu;
