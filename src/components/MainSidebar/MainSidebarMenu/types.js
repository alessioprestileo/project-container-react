// @flow

import type { Link } from '../../../types/general';

export type Item = {
  icon: string,
  link: Link,
};

type List = {
  id: string,
  listItems: Array<Item>,
  type: 'MenuList',
};

type Divider = {
  id: string,
  type: 'Divider',
};

export type MenuObject = List | Divider;
