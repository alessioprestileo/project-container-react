// @flow

import * as React from 'react';

import type { State as StoreState } from '../../types/redux/states';
import type {
  ContextMenuItem,
  FabChildButton,
  ModalData,
  SnackbarData,
  SnackbarMessageType,
  TopActionbarButton,
} from '../../types/singletons';

export const getSnackbarTransitionTime = (storeState: StoreState): ?string =>
  storeState.system.styles.data &&
  storeState.system.styles.data &&
  storeState.system.styles.data.snackbarTransitionTime;

export const getFabChildren = (storeState: StoreState): ?Array<FabChildButton> =>
  storeState.singletons.mfb.data &&
  storeState.singletons.mfb.data.children;

export const getFabTop = (storeState: StoreState): ?number =>
  storeState.singletons.mfb.data &&
  storeState.singletons.mfb.data.top;

export const getFabTransform = (storeState: StoreState): ?string =>
  storeState.singletons.mfb.data &&
  storeState.singletons.mfb.data.transform;

export const getFabVisible = (storeState: StoreState): boolean =>
  !!(
    storeState.singletons.mfb.data &&
    storeState.singletons.mfb.data.visible
  );

const modalQueueIsNotEmpty = (modalData: ModalData): boolean => !!(
  modalData.queue &&
  modalData.queue.length &&
  modalData.queue.length > 0
);

export const getContextMenuChildren = (storeState: StoreState): React.Node =>
  (
    storeState.singletons.contextMenu.data &&
    storeState.singletons.contextMenu.data.children
  ) ||
  null;

export const getContextMenuPosition = (storeState: StoreState): ?$PropertyType<ContextMenuItem, 'position'> =>
  (
    storeState.singletons.contextMenu.data &&
    storeState.singletons.contextMenu.data.position
  ) ||
  null;

export const getModalChildren = (storeState: StoreState): React.Node =>
  (
    storeState.singletons.modal.data &&
    modalQueueIsNotEmpty(storeState.singletons.modal.data) &&
    storeState.singletons.modal.data.queue[0].children
  ) ||
  null;

export const getModalCustomClasses = (storeState: StoreState): ?string => (
  (
    storeState.singletons.modal.data &&
    modalQueueIsNotEmpty(storeState.singletons.modal.data) &&
    storeState.singletons.modal.data.queue[0].customClasses
  ) ||
  null
);

export const getModalHandleCancel = (storeState: StoreState): (() => void) =>
  (
    storeState.singletons.modal.data &&
    modalQueueIsNotEmpty(storeState.singletons.modal.data) &&
    storeState.singletons.modal.data.queue[0].handleCancel
  ) ||
  (() => {});

export const getModalHandleOk = (storeState: StoreState): (() => void) =>
  (
    storeState.singletons.modal.data &&
    modalQueueIsNotEmpty(storeState.singletons.modal.data) &&
    storeState.singletons.modal.data.queue[0].handleOk
  ) ||
  (() => {});

export const getModalHasItemToShow = (storeState: StoreState): boolean =>
  !!(
    storeState.singletons.modal.data &&
    modalQueueIsNotEmpty(storeState.singletons.modal.data)
  );

export const getModalShowButtons = (storeState: StoreState): boolean =>
  !!(
    storeState.singletons.modal.data &&
    modalQueueIsNotEmpty(storeState.singletons.modal.data) &&
    (
      storeState.singletons.modal.data.queue[0].showButtons === true ||
      storeState.singletons.modal.data.queue[0].showButtons === undefined ||
      storeState.singletons.modal.data.queue[0].showButtons === null
    )
  );

export const getModalTitle = (storeState: StoreState): ?string => (
  (
    storeState.singletons.modal.data &&
    modalQueueIsNotEmpty(storeState.singletons.modal.data) &&
    storeState.singletons.modal.data.queue[0].title
  ) ||
  null
);

const snackbarQueueIsNotEmpty = (snackbarData: SnackbarData): boolean => !!(
  snackbarData.queue &&
  snackbarData.queue.length &&
  snackbarData.queue.length > 0
);

export const getSnackbarActionLabel = (storeState: StoreState): string =>
  (
    storeState.singletons.snackbar.data &&
    snackbarQueueIsNotEmpty(storeState.singletons.snackbar.data) &&
    storeState.singletons.snackbar.data.queue[0].actionLabel
  ) ||
  'UNDO';

export const getSnackbarHandleAction = (storeState: StoreState): (() => void) =>
  (
    storeState.singletons.snackbar.data &&
    snackbarQueueIsNotEmpty(storeState.singletons.snackbar.data) &&
    storeState.singletons.snackbar.data.queue[0].handleAction
  ) ||
  (() => {});

export const getSnackbarHasItemToShow = (storeState: StoreState): boolean =>
  !!(
    storeState.singletons.snackbar.data &&
    snackbarQueueIsNotEmpty(storeState.singletons.snackbar.data)
  );

export const getSnackbarMessage = (storeState: StoreState): string =>
  (
    storeState.singletons.snackbar.data &&
    snackbarQueueIsNotEmpty(storeState.singletons.snackbar.data) &&
    storeState.singletons.snackbar.data.queue[0].message
  ) ||
  'MESSAGE NOT FOUND';

export const getSnackbarMessageType = (storeState: StoreState): SnackbarMessageType =>
  (
    storeState.singletons.snackbar.data &&
    snackbarQueueIsNotEmpty(storeState.singletons.snackbar.data) &&
    storeState.singletons.snackbar.data.queue[0].messageType
  ) ||
  'INFORMATION';

export const getSnackbarShowButton = (storeState: StoreState): boolean =>
  !!(
    storeState.singletons.snackbar.data &&
    snackbarQueueIsNotEmpty(storeState.singletons.snackbar.data) &&
    storeState.singletons.snackbar.data.queue[0].showButton
  );

export const getTopActionbarButtons = (storeState: StoreState): ?Array<TopActionbarButton> =>
  storeState.singletons.topActionbar.data &&
  storeState.singletons.topActionbar.data.buttons;

export const getTopActionbarCustomClasses = (storeState: StoreState): ?string => (
  storeState.singletons.topActionbar.data &&
  storeState.singletons.topActionbar.data.customClasses
);

export const getTopActionbarHasItemToShow = (storeState: StoreState): boolean =>
  !!storeState.singletons.topActionbar.data;

export const getTopActionbarOnClose = (storeState: StoreState): (() => void) => (
  (
    storeState.singletons.topActionbar.data &&
    storeState.singletons.topActionbar.data.onClose
  ) ||
  (() => {})
);

export const getTopActionbarTitle = (storeState: StoreState): ?string => (
  storeState.singletons.topActionbar.data &&
  storeState.singletons.topActionbar.data.title
);

export const getTopActionbarMoreButtonModalTitle = (storeState: StoreState): ?string => (
  storeState.singletons.topActionbar.data &&
  storeState.singletons.topActionbar.data.moreButtonModalTitle
);
