// @flow

import type { AvailableLanguages } from '../../../types/redux/translation/reducers';
import initialState from '../../../project/src/initialState';
import { TRANSLATION_AVAILABLELANGUAGES, TRANSLATION_AVAILABLELANGUAGES_FETCHING } from '../../actions/translation/actionTypes';

const availableLanguages: AvailableLanguages =
  (state = initialState.translation.availableLanguages, action) => {
    switch (action.type) {
      case TRANSLATION_AVAILABLELANGUAGES:
        return { ...state, data: action.payload.data };

      case TRANSLATION_AVAILABLELANGUAGES_FETCHING:
        return { ...state, fetching: action.payload.data };

      default:
        (action: empty);
        return state;
    }
  };

export default availableLanguages;
