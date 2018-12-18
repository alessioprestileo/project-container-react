// @flow

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '../../Drawer/Drawer';
import MainSidebarMenu from '../MainSidebarMenu/MainSidebarMenu';
import Toolbar from '../../Toolbar/Toolbar';
import styles from './MainSidebarSmDownStyles';
import type { ClassValue, StylingTheme } from '../../../types/general';
import type { MenuObject } from '../MainSidebarMenu/types';

type Props = {
  children: React.Node,
  classes: ClassValue,
  menuData: Array<MenuObject>,
  onMainSidebarToggle: () => void,
  open: boolean,
  theme: StylingTheme,
};

const MainSidebarSmDown = (props: Props) => {
  const {
    children,
    classes,
    menuData,
    onMainSidebarToggle,
    open,
    theme,
  } = props;

  return (
    <React.Fragment>
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={open}
        onClose={onMainSidebarToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <MainSidebarMenu menuData={menuData} />
      </Drawer>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        {children}
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(MainSidebarSmDown);
