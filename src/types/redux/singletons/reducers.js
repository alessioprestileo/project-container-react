// @flow

import * as states from './states';
import * as actions from './actions';
import type { Reducer } from '../reducers';

export type ContextMenu =
  Reducer<states.ContextMenu,
    actions.ContextMenu>;

export type Fab =
  Reducer<states.Fab,
    actions.Fab>;

export type Modal =
  Reducer<states.Modal,
    actions.ModalNext | actions.ModalPush>;

export type Snackbar =
  Reducer<states.Snackbar,
    actions.SnackbarNext | actions.SnackbarPush>;

export type TopActionbar =
  Reducer<states.TopActionbar,
    actions.TopActionbarPush>;
