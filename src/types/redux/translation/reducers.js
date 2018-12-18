// @flow

import type { Reducer } from '../reducers';
import * as states from './states';
import * as actions from './actions';

export type AvailableLanguages =
  Reducer<states.AvailableLanguages,
    actions.AvailableLanguages | actions.AvailableLanguagesFetching>;

export type CurrentLanguage =
  Reducer<states.CurrentLanguage,
    actions.CurrentLanguage | actions.CurrentLanguageFetching>;

export type CurrentTranslations =
  Reducer<states.CurrentTranslations,
    actions.CurrentTranslations | actions.CurrentTranslationsFetching>;

export type OfflineLabels =
  Reducer<states.OfflineLabels,
    actions.OfflineLabels>;
