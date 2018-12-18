// @flow

import type { CurrentTranslations } from '../../../types/redux/translation/reducers';
import initialState from '../../../project/src/initialState';
import { TRANSLATION_CURRENTTRANSLATIONS, TRANSLATION_CURRENTTRANSLATIONS_FETCHING } from '../../actions/translation/actionTypes';

const currentTranslations: CurrentTranslations =
  (state = initialState.translation.currentTranslations, action) => {
    switch (action.type) {
      case TRANSLATION_CURRENTTRANSLATIONS:
        return { ...state, data: action.payload.data };

      case TRANSLATION_CURRENTTRANSLATIONS_FETCHING:
        return { ...state, fetching: action.payload.data };

      default:
        (action: empty);
        return state;
    }
  };

export default currentTranslations;
