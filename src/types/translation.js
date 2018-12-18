// @flow

export type OfflineLabels = {
  [key: string]: string,
};

export type TranslationData = {
  translationPK: {
    id: string,
    languageCode: string,
  },
  phrase: string,
};

export type LanguageData = {
  description: string,
  languageCode: string,
};
