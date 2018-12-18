// @flow

import * as actionTypeVariables from '../../../redux/actions/forms/actionTypes';
import type { ActionGeneric } from '../generics';
import type { Draft } from '../../../types/form';

export type DraftsUpdate =
  ActionGeneric<typeof actionTypeVariables.FORMS_DRAFTS_UPDATE,
  Draft>;

export type Action =
  DraftsUpdate;
