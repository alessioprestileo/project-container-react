// @flow

import * as React from 'react';
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';

import Divider from '../../Divider/Divider';
import Drawer from '../../Drawer/Drawer';
import IconButton from '../../IconButton/IconButton';
import MainSidebarMenu from '../MainSidebarMenu/MainSidebarMenu';
import Toolbar from '../../Toolbar/Toolbar';
import styles from './MainSidebarMdUpStyles';
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

const MainSidebarMdUp = (props: Props) => {
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
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
          ),
        }}
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={onMainSidebarToggle}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <MainSidebarMenu menuData={menuData} />
      </Drawer>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        {children}
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(MainSidebarMdUp);
