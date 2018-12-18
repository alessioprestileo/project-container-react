// @flow

import React from 'react';

import type { Button } from '../../types/general';
import './ContextMenuOptions.scss';


type Props = {
  buttons: Array<Button>,
  // Optional props
  customClasses: string,
};

const ContextMenuOptions = (props: Props) => {
  const {
    buttons,
    customClasses,
  } = props;

  return (
    <div className="context-menu-options-container">
      <ul className={`context-menu-options ${customClasses}`}>
        {
          buttons.map(item => (
            <li key={item.label} className="context-menu-option">
              <button
                className="k-button"
                onClick={item.onClick}
                type="button"
              >
                {
                  item.icon &&
                  <i className={`option-icon ${item.icon} ${item.customClasses || ''}`} />
                }
                <span>
                  {item.label}
                </span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

ContextMenuOptions.defaultProps = {
  customClasses: '',
};

export default ContextMenuOptions;
