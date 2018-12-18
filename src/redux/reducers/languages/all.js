// @flow

import initialState from '../../../project/src/initialState';
import { LANGUAGES_ALL, LANGUAGES_ALL_FETCHING } from '../../actions/languages/actionTypes';
import type { All } from '../../../types/redux/languages/reducers';

const all: All =
  (state = initialState.languages.all, action) => {
    switch (action.type) {
      case LANGUAGES_ALL:
        return { ...state, data: action.payload.data };

      case LANGUAGES_ALL_FETCHING:
        return { ...state, fetching: action.payload.data };

      default:
        (action: empty);
        return state;
    }
  };

export default all;
