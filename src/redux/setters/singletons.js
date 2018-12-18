// @flow

import { singletonsFab } from '../actions/actionCreators';
import type { FabChildButton } from '../../types/singletons';
import type { State as StoreState } from '../../types/redux/states';

export const setFabChildren = (
  singletonsFabActionCreator: typeof singletonsFab,
  storeState: StoreState,
  children: Array<FabChildButton>,
): void => {
  const copy = storeState.singletons.mfb.data;
  const defaultFabTop = 0;
  const defaultFabTransform = 'initial';

  if (copy) {
    singletonsFabActionCreator({ data: { ...copy, children } });
    return;
  }

  singletonsFabActionCreator({
    data: {
      children,
      top: defaultFabTop,
      transform: defaultFabTransform,
      visible: false,
    },
  });
};

export const setFabVisible = (
  singletonsFabActionCreator: typeof singletonsFab,
  storeState: StoreState,
  visible: boolean,
): void => {
  const copy = storeState.singletons.mfb.data;

  if (copy) {
    singletonsFabActionCreator({ data: { ...copy, visible } });
  }
};
