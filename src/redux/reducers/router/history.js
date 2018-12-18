// @flow

import initialState from '../../../project/src/initialState';
import { ROUTER_HISTORY } from '../../actions/router/actionTypes';
import type { History } from '../../../types/redux/router/reducers';

const history: History = (state = initialState.router.history, action) => {
  switch (action.type) {
    case ROUTER_HISTORY:
      return { data: action.payload.data };

    default:
      (action: empty);
      return state;
  }
};

export default history;
