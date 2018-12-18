// @flow

import type { State as StoreState } from '../../types/redux/states';
import type { RouterHistory } from '../../types/router';

export const getHistory = (storeState: StoreState): ?RouterHistory =>
  storeState.router.history.data;

export const getPathname = (storeState: StoreState): string => (
  storeState.router.pathname.data ||
  ''
);
