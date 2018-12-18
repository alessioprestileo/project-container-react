// @flow

import React from 'react';

import Icon from '../../../Icon/Icon';
import List from '../../../List/List';
import ListItem from '../../../List/ListItem/ListItem';
import ListItemIcon from '../../../List/ListItem/ListItemIcon/ListItemIcon';
import ListItemText from '../../../List/ListItem/ListItemText/ListItemText';
import type { Item as ItemType } from '../types';

type Props = {
  listItems: Array<ItemType>,
};

const MenuList = (props: Props) => {
  const { listItems } = props;

  return (
    <List>
      {
        listItems.map(item => (
          <ListItem button key={item.link.label}>
            <ListItemIcon>
              <Icon name={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.link.label} />
          </ListItem>
        ))
      }
    </List>
  );
};

export default MenuList;
