// @flow

import * as actionTypeVariables from '../../../redux/actions/singletons/actionTypes';
import type { ActionGeneric } from '../generics';
import type {
  ContextMenuItem,
  Fab as FabData,
  ModalItem,
  SnackbarItem,
  TopActionbarItem,
} from '../../../types/singletons';

export type ContextMenu =
  ActionGeneric<typeof actionTypeVariables.SINGLETONS_CONTEXTMENU,
  ContextMenuItem>;

export type Fab =
  ActionGeneric<typeof actionTypeVariables.SINGLETONS_MFB,
  FabData>;

export type ModalNext =
  ActionGeneric<typeof actionTypeVariables.SINGLETONS_MODAL_NEXT,
  null>;

export type ModalPush =
  ActionGeneric<typeof actionTypeVariables.SINGLETONS_MODAL_PUSH,
  ModalItem>;

export type SnackbarNext =
  ActionGeneric<typeof actionTypeVariables.SINGLETONS_SNACKBAR_NEXT,
  null>;

export type SnackbarPush =
  ActionGeneric<typeof actionTypeVariables.SINGLETONS_SNACKBAR_PUSH,
  SnackbarItem>;

export type TopActionbarPush =
  ActionGeneric<typeof actionTypeVariables.SINGLETONS_TOPACTIONBAR_PUSH,
  TopActionbarItem>;

export type Action =
  ContextMenu |
  Fab |
  ModalNext |
  ModalPush |
  SnackbarNext |
  SnackbarPush |
  TopActionbarPush;
