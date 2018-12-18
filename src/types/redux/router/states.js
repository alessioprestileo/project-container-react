// @flow

import type { NavigationBlocker, RouterHistory } from '../../router';

export type History = {
  +data: ?RouterHistory,
};

export type Pathname = {
  +data: ?string,
};

export type Navigation = {
  +blockersList: {
    +data: Array<NavigationBlocker>,
  },
  +hasCheck: {
    +data: boolean,
  },
  +isBlocked: {
    +data: boolean,
  },
  +removeCheck: {
    +data: ?() => void,
  },
  +urlAfterUnblocked: {
    data: ?string,
  },
};

export type State= {
  +history: History,
  +navigation: Navigation,
  +pathname: Pathname,
};
