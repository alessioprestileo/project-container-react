// @flow

import * as actions from '../../../types/redux/translation/actions';
import * as actionTypeVariables from './actionTypes';

type AvailableLanguagesPayload = $PropertyType<actions.AvailableLanguages, 'payload'>;

export const translationAvailableLanguages =
  (payload: AvailableLanguagesPayload): actions.AvailableLanguages => ({
    type: actionTypeVariables.TRANSLATION_AVAILABLELANGUAGES,
    payload,
  });

type AvailableLanguagesFetchingPayload = $PropertyType<actions.AvailableLanguagesFetching, 'payload'>;

export const translationAvailableLanguagesFetching =
  (payload: AvailableLanguagesFetchingPayload): actions.AvailableLanguagesFetching => ({
    type: actionTypeVariables.TRANSLATION_AVAILABLELANGUAGES_FETCHING,
    payload,
  });

type CurrentLanguagePayload = $PropertyType<actions.CurrentLanguage, 'payload'>;

export const translationCurrentLanguage =
  (payload: CurrentLanguagePayload): actions.CurrentLanguage => ({
    type: actionTypeVariables.TRANSLATION_CURRENTLANGUAGE,
    payload,
  });

type CurrentLanguageFetchingPayload = $PropertyType<actions.CurrentLanguageFetching, 'payload'>;

export const translationCurrentLanguageFetching =
  (payload: CurrentLanguageFetchingPayload): actions.CurrentLanguageFetching => ({
    type: actionTypeVariables.TRANSLATION_CURRENTTRANSLATION_FETCHING,
    payload,
  });

type CurrentTranslationsPayload = $PropertyType<actions.CurrentTranslations, 'payload'>;

export const translationCurrentTranslations =
  (payload: CurrentTranslationsPayload): actions.CurrentTranslations => ({
    type: actionTypeVariables.TRANSLATION_CURRENTTRANSLATIONS,
    payload,
  });

type CurrentTranslationsFetchingPayload = $PropertyType<actions.CurrentTranslationsFetching, 'payload'>;

export const translationCurrentTranslationsFetching =
  (payload: CurrentTranslationsFetchingPayload): actions.CurrentTranslationsFetching => ({
    type: actionTypeVariables.TRANSLATION_CURRENTTRANSLATIONS_FETCHING,
    payload,
  });

type OfflineLabelsPayload = $PropertyType<actions.OfflineLabels, 'payload'>;

export const translationOfflineLabels =
  (payload: OfflineLabelsPayload): actions.OfflineLabels => ({
    type: actionTypeVariables.TRANSLATION_OFFLINELABELS,
    payload,
  });
