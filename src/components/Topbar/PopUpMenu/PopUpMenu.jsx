// @flow

import React from 'react';

import Icon from '../../Icon/Icon';
import Badge from '../../Badge/Badge';
import IconButton from '../../IconButton/IconButton';
import Menu from '../../Menu/Menu';
import MenuItem from '../../MenuItem/MenuItem';
import type { PopUpMenu as PopUpMenuType } from './types';

type Props = {
  // Optional props
  menuData: PopUpMenuType,
};

type State = {
  anchorEl: ?HTMLElement,
};

class PopUpMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handlePopUpClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePopUpOpen = (event: SyntheticEvent<HTMLElement>): void => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { menuData } = this.props;
    const { anchorEl } = this.state;
    const isPopUpOpen = Boolean(anchorEl);

    const popUp = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isPopUpOpen}
        onClose={this.handlePopUpClose}
      >
        {
          menuData.menuItems &&
          menuData.menuItems.map(item => (
            <MenuItem
              key={item.label}
              onClick={() => {}}
            >
              {item.label}
            </MenuItem>
          ))
        }
        {
          menuData.subMenus &&
          menuData.subMenus.map(item => (
            <PopUpMenu
              key={item.label}
              menuData={item}
            />
          ))
        }
      </Menu>
    );

    return (
      <React.Fragment>
        <IconButton
          aria-owns={isPopUpOpen ? 'material-appbar' : null}
          aria-haspopup="true"
          color="inherit"
          onClick={this.handlePopUpOpen}
        >
          {
            menuData.badgeContent &&
            <Badge badgeContent={menuData.badgeContent} color="secondary">
              <Icon name={menuData.icon} />
            </Badge>
          }
          {
            !menuData.badgeContent &&
            <Icon name={menuData.icon} />
          }
        </IconButton>
        {popUp}
      </React.Fragment>
    );
  }
}

export default PopUpMenu;
