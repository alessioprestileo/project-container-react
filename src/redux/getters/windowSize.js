// @flow

import type { State as StoreState } from '../../types/redux/states';

export const getBreakPointDesktop = (storeState: StoreState): ?number =>
  storeState.windowSize.widthBreakPoints.data &&
  storeState.windowSize.widthBreakPoints.data.desktop;

export const getBreakPointTablet = (storeState: StoreState): ?number =>
  storeState.windowSize.widthBreakPoints.data &&
  storeState.windowSize.widthBreakPoints.data.tablet;

export const getWindowHeight = (storeState: StoreState): ?number =>
  storeState.windowSize.current.data &&
  storeState.windowSize.current.data.height;

export const getWindowWidth = (storeState: StoreState): ?number =>
  storeState.windowSize.current.data &&
  storeState.windowSize.current.data.width;
