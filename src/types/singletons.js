// @flow

import * as React from 'react';

import type { Button } from './general';

export type ContextMenuItem = {
  children: React.Node,
  position: {
    x: string,
    y: string,
  },
};

export type FabChildButton = Button;

export type Fab = {
  children: Array<FabChildButton>,
  top: number,
  transform: string,
  visible: boolean,
};

export type ModalItem = {
  children: React.Node,
  customClasses?: string,
  handleCancel?: () => void,
  handleOk?: () => void,
  showButtons?: boolean,
  title?: ?string,
};

export type ModalData = {
  queue: Array<ModalItem>,
};

export type SnackbarMessageType = 'ERROR' | 'INFORMATION' | 'SUCCESS' | 'WARNING';

export type SnackbarItem = {
  actionLabel?: ?string,
  handleAction?: () => void,
  message?: string,
  messageType?: SnackbarMessageType,
  showButton?: boolean,
};

export type SnackbarData = {
  queue: Array<SnackbarItem>,
};

export type TopActionbarButton = Button;

export type TopActionbarItem = {
  buttons: Array<TopActionbarButton>,
  customClasses?: string,
  moreButtonModalTitle?: string,
  onClose: () => void,
  title?: ?string,
};
