// @flow

import React from 'react';
import AccountCircleImported from '@material-ui/icons/AccountCircle';
import MailImported from '@material-ui/icons/Mail';
import MoreVertImported from '@material-ui/icons/MoreVert';
import MoveToInboxImported from '@material-ui/icons/MoveToInbox';
import NotificationsImported from '@material-ui/icons/Notifications';

const iconsMap = {
  AccountCircle: <AccountCircleImported />,
  Mail: <MailImported />,
  MoreVert: <MoreVertImported />,
  MoveToInbox: <MoveToInboxImported />,
  Notifications: <NotificationsImported />,
};

type Props = {
  name: string;
};

const Icon = (props: Props) => {
  const { name } = props;

  return iconsMap[name];
};

export default Icon;
