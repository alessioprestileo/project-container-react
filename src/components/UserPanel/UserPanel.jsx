// @flow

import React from 'react';

import type { EventHandler } from '../../types/general';

type Props = {
  onClick: EventHandler,
  userName: string,
  // Optional props
  avatarUrl: ?string,
  customClass: string,
  href: string,
};

const UserPanel = (props: Props) => {
  const {
    avatarUrl,
    customClass,
    href,
    onClick,
    userName,
  } = props;
  const firstLetter = userName && userName.charAt(0).toLocaleUpperCase();

  return (
    <li
      className={`dropdown user user-menu custom ${customClass}`}
      onClick={onClick}
      role="presentation"
    >
      <a className="user-wrapper" href={href}>
        {
          avatarUrl &&
          <img src={avatarUrl} className="user-image" alt="User" />
        }
        {
          !avatarUrl &&
          <div className="user-image">{firstLetter}</div>
        }
        <span className="user-name hidden-xs">{userName}</span>
      </a>
    </li>
  );
};

UserPanel.defaultProps = {
  avatarUrl: null,
  href: '#',
  customClass: '',
};

export default UserPanel;
