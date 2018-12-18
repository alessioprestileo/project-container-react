// @flow

import * as React from 'react';

import { navigate } from './functions';

const withNavigation = (WrappedComponent: React.ComponentType<any>) => (props: Object) => (
  <WrappedComponent {...props} navigate={navigate} />
);

export default withNavigation;
