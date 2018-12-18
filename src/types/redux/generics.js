// @flow

export type PayloadGeneric<D> = {
  data: ?D,
};

export type ActionGeneric<T, D> = {
  type: T,
  payload: PayloadGeneric<D>,
};

