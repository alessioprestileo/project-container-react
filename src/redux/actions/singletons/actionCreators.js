// @flow

import * as actions from '../../../types/redux/singletons/actions';
import * as actionTypeVariables from './actionTypes';

type ContextMenuPayload = $PropertyType<actions.ContextMenu, 'payload'>;

export const singletonsContextMenu =
  (payload: ContextMenuPayload): actions.ContextMenu => ({
    type: actionTypeVariables.SINGLETONS_CONTEXTMENU,
    payload,
  });

type FabPayload = $PropertyType<actions.Fab, 'payload'>;

export const singletonsFab =
  (payload: FabPayload): actions.Fab => ({
    type: actionTypeVariables.SINGLETONS_MFB,
    payload,
  });

type ModalNextPayload = $PropertyType<actions.ModalNext, 'payload'>;

export const singletonsModalNext =
  (payload: ModalNextPayload): actions.ModalNext => ({
    type: actionTypeVariables.SINGLETONS_MODAL_NEXT,
    payload,
  });

type ModalPushPayload = $PropertyType<actions.ModalPush, 'payload'>;

export const singletonsModalPush =
  (payload: ModalPushPayload): actions.ModalPush => ({
    type: actionTypeVariables.SINGLETONS_MODAL_PUSH,
    payload,
  });

type SnackbarNextPayload = $PropertyType<actions.SnackbarNext, 'payload'>;

export const singletonsSnackbarNext =
  (payload: SnackbarNextPayload): actions.SnackbarNext => ({
    type: actionTypeVariables.SINGLETONS_SNACKBAR_NEXT,
    payload,
  });

type SnackbarPushPayload = $PropertyType<actions.SnackbarPush, 'payload'>;

export const singletonsSnackbarPush =
  (payload: SnackbarPushPayload): actions.SnackbarPush => ({
    type: actionTypeVariables.SINGLETONS_SNACKBAR_PUSH,
    payload,
  });

type TopActionbarPushPayload = $PropertyType<actions.TopActionbarPush, 'payload'>;

export const singletonsTopActionbarPush =
  (payload: TopActionbarPushPayload): actions.TopActionbarPush => ({
    type: actionTypeVariables.SINGLETONS_TOPACTIONBAR_PUSH,
    payload,
  });
