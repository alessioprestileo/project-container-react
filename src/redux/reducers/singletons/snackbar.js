// @flow

import initialState from '../../../project/src/initialState';
import { SINGLETONS_SNACKBAR_NEXT, SINGLETONS_SNACKBAR_PUSH } from '../../actions/singletons/actionTypes';
import type { Snackbar } from '../../../types/redux/singletons/reducers';

const snackbar: Snackbar = (state = initialState.singletons.snackbar, action) => {
  const prevQueue = (state.data && state.data.queue) || [];
  let newQueue = [];

  switch (action.type) {
    case SINGLETONS_SNACKBAR_NEXT:
      if (prevQueue.length > 0) {
        prevQueue.shift();
        newQueue = [...prevQueue];
      }
      return { data: { queue: newQueue } };

    case SINGLETONS_SNACKBAR_PUSH:
      if (action.payload.data) {
        prevQueue.push(action.payload.data);
        newQueue = [...prevQueue];

        return { data: { queue: newQueue } };
      }

      return state;

    default:
      (action: empty);
      return state;
  }
};

export default snackbar;
