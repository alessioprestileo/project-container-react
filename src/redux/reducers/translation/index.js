// @flow

import { combineReducers } from 'redux';
import type { CombinedReducer } from 'redux';
import type { Action } from '../../../types/redux/translation/actions';
import availableLanguages from './availableLanguages';
import currentLanguage from './currentLanguage';
import currentTranslations from './currentTranslations';
import offlineLabels from './offlineLabels';

const translation: CombinedReducer<any, Action> = combineReducers({
  availableLanguages,
  currentLanguage,
  currentTranslations,
  offlineLabels,
});

export default translation;
