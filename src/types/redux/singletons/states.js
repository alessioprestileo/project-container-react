// @flow

import type {
  ContextMenuItem,
  Fab as FabImport,
  ModalData as ModalImport,
  SnackbarData as SnackbarImport,
  TopActionbarItem as TopActionbarImport,
} from '../../../types/singletons';

export type ContextMenu = {
  +data: ?ContextMenuItem,
};

export type Fab = {
  +data: ?FabImport,
};

export type Modal = {
  +data: ?ModalImport,
};

export type Snackbar = {
  +data: ?SnackbarImport,
};

export type TopActionbar = {
  +data: ?TopActionbarImport,
};

export type State= {
  +contextMenu: ContextMenu,
  +mfb: Fab,
  +modal: Modal,
  +snackbar: Snackbar,
  +topActionbar: TopActionbar,
};
