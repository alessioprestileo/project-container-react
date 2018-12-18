// @flow

import * as actionTypeVariables from '../../../redux/actions/windowSize/actionTypes';
import type { ActionGeneric } from '../generics';
import type { WindowSize, WindowWidthBreakPoints } from '../../../types/general';

export type Current =
  ActionGeneric<typeof actionTypeVariables.WINDOWSIZE_CURRENT,
  WindowSize>;

export type WidthBreakPoints =
  ActionGeneric<typeof actionTypeVariables.WINDOWSIZE_WIDTHBREAKPOINTS,
  WindowWidthBreakPoints>;

export type Action =
  Current |
  WidthBreakPoints;
