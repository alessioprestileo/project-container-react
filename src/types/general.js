// @flow

import * as React from 'react';
import type { RouterHistory } from 'react-router-dom';

import type { State as StoreState } from '../types/redux/states';

export type NavigateFunction = (
  StoreState,
  RouterHistory,
  ?string,
  ?boolean,
  ?string,
) => void;

export type Breadcrumb = {
  label: string,
  path: string,
};

export type DeviceWidth = 'DESKTOP' | 'SMARTPHONE' | 'TABLET';

export type EventHandler = (event: SyntheticEvent<HTMLElement>) => void;

export type HttpResponse = {
  body: Object,
  statusCode: number,
  text: string,
};

export type Link = {
  external?: boolean,
  icon?: string,
  label: string,
  url: string,
};

export type LoginCredentials = {
  userName: string,
  password: string,
  invitationId: ?string,
  language: ?string,
  companyId: ?string,
  loginSubmitBtn: ?string,
};

export type BrowserStorageAction = 'CLEAR' | 'GET' | 'REMOVE' | 'SET';

export type Button = {
  customClasses?: string,
  icon?: string,
  label: string,
  onClick: Function,
  onHold?: Function,
};

export type LoggedInUser = {
  +zerpSession: {
    +avatarUrl: ?string,
    +language: ?string,
    +userId: ?string,
    +userName: ?string,
    +userSuperAdmin: ?boolean,
  },
};

export type WindowSize = {
  height: number,
  width: number,
};

export type WindowWidthBreakPoints = {
  desktop: number,
  tablet: number,
};

export type AccordionChildren = Array<React.Node>;

export type AccordionData = {
  children: AccordionChildren,
  customClasses?: string,
  iconName?: ?string,
  id: string,
  label: ?string,
  loading: boolean,
};

export type CardData = AccordionData;

export type TabData = AccordionData;

export type RegisteredUser = {
  companyId: ?number,
  companyName: ?string,
  loginId: ?string,
  roleName: ?string,
  userFeatures: ?string,
  userName: ?string,
};

export type UserRole =
  'REGULAR' |
  'SUPERADMIN' |
  'SUPPORT';

export type EncodedImage = {
  contentType: ?string;
  encodedContent: ?string;
  fileName: ?string;
  filePath: ?string;
};

export type CountriesListItem = {
  lovCode: string,
  lovValue: string,
};

export type CurrenciesListItem = {
  currencyCode: string,
  currencyId: number,
  currencyName: string,
};

type ClassDictionary = {
  [id: string]: any,
};

export type ClassValue = ClassDictionary;

export type ClassArray = Array<ClassValue>;

export type StylingTheme = Object;
