// @flow

import initialState from '../../../project/src/initialState';
import { ROUTER_PATHNAME } from '../../actions/router/actionTypes';
import type { Pathname } from '../../../types/redux/router/reducers';

const pathname: Pathname = (state = initialState.router.pathname, action) => {
  switch (action.type) {
    case ROUTER_PATHNAME:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default pathname;
