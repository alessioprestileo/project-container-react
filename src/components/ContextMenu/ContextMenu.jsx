// @flow

import * as React from 'react';

import storeReadWrite from '../../shared/storeReadWrite';
import * as actionCreators from '../../redux/actions/actionCreators';
import {
  getContextMenuChildren,
  getContextMenuPosition,
} from '../../redux/getters/singletons';
import type { State as StoreState } from '../../types/redux/states';
import './ContextMenu.scss';

export type Props = {
  storeActions: typeof actionCreators, // eslint-disable-line react/no-unused-prop-types
  storeState: StoreState,
};

const ContextMenu = (props: Props) => {
  const { storeState } = props;
  const children = getContextMenuChildren(storeState);
  const position = getContextMenuPosition(storeState);
  const style = (
    position &&
    {
      top: position.y,
      left: position.x,
    }
  ) ||
  {};

  const contextMenuHide = (): void => {
    const { storeActions } = props;
    const payload = {
      data: null,
    };
    storeActions.singletonsContextMenu(payload);
  };

  return (
    <React.Fragment>
      {
        children &&
        <div
          className="context-menu-container"
          onClick={contextMenuHide}
          onContextMenu={(event) => {
            event.preventDefault();
            contextMenuHide();
          }}
          role="presentation"
        >
          <div
            className="context-menu"
            role="presentation"
            style={style}
          >
            {children}
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default storeReadWrite(ContextMenu);
