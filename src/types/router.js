// @flow

import type { RouterHistory as RouterHistoryImported } from 'react-router-dom';

import type { ModalItem } from './singletons';

export type BrowserHistoryBuildOptions = {
  basename?: string,
  forceRefresh?: boolean,
  getUserConfirmation?: (message: string, callback: (result: boolean) => void) => void,
  keyLength?: number,
};

export type NavigationBlocker = {
  id: string,
  modalItem: ModalItem,
};

export type RouterHistory = RouterHistoryImported;
