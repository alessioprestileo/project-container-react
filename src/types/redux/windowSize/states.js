// @flow

import type { WindowWidthBreakPoints, WindowSize } from '../../general';

export type WidthBreakPoints = {
  +data: ?WindowWidthBreakPoints;
};

export type Current = {
  +data: ?WindowSize;
};

export type State= {
  +current: Current,
  +widthBreakPoints: WidthBreakPoints,
};
