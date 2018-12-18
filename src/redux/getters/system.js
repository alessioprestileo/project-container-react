// @flow

import type { State as StoreState } from '../../types/redux/states';

export const getAllStyleVariables = (storeState: StoreState): ?Object =>
  storeState.system.styles.data;

export const getBasePath = (storeState: StoreState): string =>
  (
    storeState.system.envSettings.data &&
    storeState.system.envSettings.data.PROJECT_BASE_PATH
  ) ||
  '';

export const getStyleVariable = (storeState: StoreState, varName: string): ?string =>
  storeState.system.styles.data &&
  storeState.system.styles.data[varName];
