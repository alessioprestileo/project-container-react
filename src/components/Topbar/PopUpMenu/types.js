// @flow

import type { Link } from '../../../types/general';

export type PopUpMenu = {
  badgeContent?: number,
  icon: string,
  id: string,
  label: string,
  menuItems?: Array<Link>,
  subMenus?: Array<PopUpMenu>,
};
