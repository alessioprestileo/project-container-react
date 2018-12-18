// @flow

import * as React from 'react';

type Props = {
  children: React.Node,
  id: string,
  // Optional props
  active: boolean,
  customClasses: string,
};

const TabPane = (props: Props) => {
  const {
    active,
    children,
    customClasses,
    id,
  } = props;

  return (
    <React.Fragment>
      {
        active &&
        <div className={`tab-pane ${active ? 'active' : ''}`} id={id}>
          <ul className={`tab-pane-content ${customClasses}`}>
            {children}
          </ul>
        </div>
      }
    </React.Fragment>
  );
};

TabPane.defaultProps = {
  active: false,
  customClasses: '',
};

export default TabPane;
