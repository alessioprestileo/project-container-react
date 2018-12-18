// @flow

import * as React from 'react';

import Hidden from '../Hidden/Hidden';
import MainSidebarMdUp from './MainSidebarMdUp/MainSidebarMdUp';
import MainSidebarSmDown from './MainSidebarSmDown/MainSidebarSmDown';
import type { MenuObject } from './MainSidebarMenu/types';

type Props = {
  children: React.Node,
  menuData: Array<MenuObject>,
  onMainSidebarToggle: () => void,
  open: boolean,
};

const MainSidebar = (props: Props) => {
  const {
    children,
    menuData,
    onMainSidebarToggle,
    open,
  } = props;

  return (
    <React.Fragment>
      <Hidden smDown>
        <MainSidebarMdUp
          menuData={menuData}
          onMainSidebarToggle={onMainSidebarToggle}
          open={open}
        >
          {children}
        </MainSidebarMdUp>
      </Hidden>
      <Hidden mdUp>
        <MainSidebarSmDown
          menuData={menuData}
          onMainSidebarToggle={onMainSidebarToggle}
          open={open}
        >
          {children}
        </MainSidebarSmDown>
      </Hidden>
    </React.Fragment>
  );
};

export default MainSidebar;
