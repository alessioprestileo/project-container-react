// @flow

import initialState from '../../../project/src/initialState';
import { SINGLETONS_MODAL_NEXT, SINGLETONS_MODAL_PUSH } from '../../actions/singletons/actionTypes';
import type { Modal } from '../../../types/redux/singletons/reducers';

const modal: Modal = (state = initialState.singletons.modal, action) => {
  const prevQueue = (state.data && state.data.queue) || [];
  let newQueue = [];

  switch (action.type) {
    case SINGLETONS_MODAL_NEXT:
      if (prevQueue.length > 0) {
        prevQueue.shift();
        newQueue = [...prevQueue];
      }
      return { data: { queue: newQueue } };

    case SINGLETONS_MODAL_PUSH:
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

export default modal;
