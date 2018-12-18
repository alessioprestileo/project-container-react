// @flow

import type { CurrentLanguage } from '../../../types/redux/translation/reducers';
import initialState from '../../../project/src/initialState';
import { TRANSLATION_CURRENTLANGUAGE, TRANSLATION_CURRENTTRANSLATION_FETCHING } from '../../actions/translation/actionTypes';

const currentLanguage: CurrentLanguage =
  (state = initialState.translation.currentLanguage, action) => {
    switch (action.type) {
      case TRANSLATION_CURRENTLANGUAGE:
        return { ...state, data: action.payload.data };

      case TRANSLATION_CURRENTTRANSLATION_FETCHING:
        return { ...state, fetching: action.payload.data };

      default:
        (action: empty);
        return state;
    }
  };

export default currentLanguage;
