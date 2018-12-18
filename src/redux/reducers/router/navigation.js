// @flow

import initialState from '../../../project/src/initialState';
import {
  ROUTER_NAVIGATIONBLOCKERSLISTADD,
  ROUTER_NAVIGATIONBLOCKERSLISTREMOVE,
  ROUTER_NAVIGATIONHASCHECK,
  ROUTER_NAVIGATIONISBLOCKED,
  ROUTER_NAVIGATIONREMOVECHECK,
  ROUTER_NAVIGATIONURLAFTERUNBLOCKED,
} from '../../actions/router/actionTypes';
import type { Navigation } from '../../../types/redux/router/reducers';

const navigation: Navigation = (state = initialState.router.navigation, action) => {
  const copyOfBlockersList = [...(state.blockersList.data)];
  let data = null;

  switch (action.type) {
    case ROUTER_NAVIGATIONBLOCKERSLISTADD:
      ({ data } = action.payload);
      if (
        !data ||
        copyOfBlockersList.includes(data)
      ) {
        return state;
      }

      copyOfBlockersList.push(data);
      return { ...state, blockersList: { data: copyOfBlockersList } };

    case ROUTER_NAVIGATIONBLOCKERSLISTREMOVE: {
      ({ data } = action.payload);
      const found = copyOfBlockersList.find(item => item.id === data);
      const index = found ?
        copyOfBlockersList.indexOf(found) :
        -1;

      if (!data || index === -1) {
        return state;
      }

      copyOfBlockersList.splice(index, 1);
      return { ...state, blockersList: { data: copyOfBlockersList } };
    }

    case ROUTER_NAVIGATIONHASCHECK:
      ({ data } = action.payload);
      return { ...state, hasCheck: { data: !!data } };

    case ROUTER_NAVIGATIONISBLOCKED:
      ({ data } = action.payload);
      return { ...state, isBlocked: { data: !!data } };

    case ROUTER_NAVIGATIONREMOVECHECK:
      ({ data } = action.payload);
      return { ...state, removeCheck: { data } };

    case ROUTER_NAVIGATIONURLAFTERUNBLOCKED:
      ({ data } = action.payload);
      return { ...state, urlAfterUnblocked: { data } };

    default:
      (action: empty);
      return state;
  }
};

export default navigation;
