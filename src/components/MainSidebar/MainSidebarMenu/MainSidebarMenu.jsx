// @flow

import * as React from 'react';

import Divider from '../../Divider/Divider';
import MenuList from './MenuList/MenuList';
import type { MenuObject } from './types';

type Props = {
  menuData: Array<MenuObject>,
};

const MainSidebarMenu = (props: Props) => {
  const { menuData } = props;

  return (
    <React.Fragment>
      {
        menuData.map((item) => {
          switch (item.type) {
            case 'MenuList':
              return (
                <MenuList
                  key={item.id}
                  listItems={item.listItems}
                />
              );
            case 'Divider':
              return (<Divider key={item.id} />);
            default:
              return null;
          }
        })
      }
    </React.Fragment>
  );
};

export default MainSidebarMenu;
