// @flow

import type {
  LanguageData,
  OfflineLabels as OfflineLabelsDataImported,
  TranslationData as TranslationDataImported,
} from '../../translation';

export type AvailableLanguagesData = Array<LanguageData>;

export type AvailableLanguages = {
  +data: ?AvailableLanguagesData,
  +fetching: ?boolean,
};

export type CurrentLanguageData = LanguageData;

export type CurrentLanguage = {
  +data: ?CurrentLanguageData,
  +fetching: ?boolean,
};

export type CurrentTranslationsData = Array<TranslationDataImported>;

export type CurrentTranslations = {
  +data: ?CurrentTranslationsData,
  +fetching: ?boolean,
};

export type OfflineLabelsData = OfflineLabelsDataImported;

export type OfflineLabels = {
  +data: ?OfflineLabelsData,
};

export type State= {
  +availableLanguages: AvailableLanguages,
  +currentLanguage: CurrentLanguage,
  +currentTranslations: CurrentTranslations,
  +offlineLabels: OfflineLabels,
};
