// @flow

import * as states from './states';
import * as actionTypeVariables from '../../../redux/actions/translation/actionTypes';
import type { ActionGeneric } from '../generics';

export type AvailableLanguages =
  ActionGeneric<typeof actionTypeVariables.TRANSLATION_AVAILABLELANGUAGES,
  states.AvailableLanguagesData>;

export type AvailableLanguagesFetching =
  ActionGeneric<typeof actionTypeVariables.TRANSLATION_AVAILABLELANGUAGES_FETCHING,
  boolean>;

export type CurrentLanguage =
  ActionGeneric<typeof actionTypeVariables.TRANSLATION_CURRENTLANGUAGE,
  states.CurrentLanguageData>;

export type CurrentLanguageFetching =
  ActionGeneric<typeof actionTypeVariables.TRANSLATION_CURRENTTRANSLATION_FETCHING,
  boolean>;

export type CurrentTranslations =
  ActionGeneric<typeof actionTypeVariables.TRANSLATION_CURRENTTRANSLATIONS,
  states.CurrentTranslationsData>;

export type CurrentTranslationsFetching =
  ActionGeneric<typeof actionTypeVariables.TRANSLATION_CURRENTTRANSLATIONS_FETCHING,
  boolean>;

export type OfflineLabels =
  ActionGeneric<typeof actionTypeVariables.TRANSLATION_OFFLINELABELS,
  states.OfflineLabelsData>;

export type Action =
  AvailableLanguages |
  AvailableLanguagesFetching |
  CurrentLanguage |
  CurrentLanguageFetching |
  CurrentTranslations |
  CurrentTranslationsFetching |
  OfflineLabels;
