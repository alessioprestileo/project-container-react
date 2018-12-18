// @flow

import type { LanguageData, OfflineLabels } from '../../types/translation';
import type { State as StoreState } from '../../types/redux/states';

export const getAvailableLanguages = (storeState: StoreState): ?Array<LanguageData> =>
  storeState.translation.availableLanguages.data;

export const getCurrentTranslations = (storeState: StoreState): ?OfflineLabels => {
  const defaultData = storeState.translation.offlineLabels.data;

  if (defaultData) {
    return (
      // storeState.translation.currentTranslations.data ||
      defaultData
    );
  }

  return null;
};
