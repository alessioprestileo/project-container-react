// @flow

import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import Hidden from '../Hidden/Hidden';
import PopUpMenu from './PopUpMenu/PopUpMenu';
import IconButton from '../IconButton/IconButton';
import InputBase from '../InputBase/InputBase';
import Toolbar from '../Toolbar/Toolbar';
import Typography from '../Typography/Typography';
import styles from './TopbarStyles';
import type { ClassValue } from '../../types/general';
import type { PopUpMenu as PopUpMenuType } from './PopUpMenu/types';

type Props = {
  classes: ClassValue,
  mainSidebarOpen: boolean,
  onMainSidebarToggle: () => void,
  // Optional props
  dropDownMenus: Array<PopUpMenuType>,
  projectTitle: ?string,
};

const Topbar = (props: Props) => {
  const {
    classes,
    dropDownMenus,
    mainSidebarOpen,
    onMainSidebarToggle,
    projectTitle,
  } = props;

  const moreMenuData: PopUpMenuType = {
    id: 'more',
    icon: 'MoreVert',
    label: 'More',
    subMenus: props.dropDownMenus,
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: mainSidebarOpen,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="Open drawer"
            className={classNames(classes.menuButton, mainSidebarOpen && classes.menuIconHidden)}
            color="inherit"
            onClick={onMainSidebarToggle}
          >
            <MenuIcon />
          </IconButton>
          {
            projectTitle &&
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              {projectTitle}
            </Typography>
          }
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
          <Hidden smDown>
            {
              dropDownMenus.map(item => (
                <PopUpMenu key={item.label} menuData={item} />
              ))
            }
          </Hidden>
          <Hidden mdUp>
            <PopUpMenu menuData={moreMenuData} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Topbar.defaultProps = {
  dropDownMenus: [],
  projectTitle: null,
};

export default withStyles(styles)(Topbar);
