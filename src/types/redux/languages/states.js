// @flow

import type { LanguagesItem } from '../../languages';

export type AllData = LanguagesItem;

export type All = {
  +data: ?Array<LanguagesItem>,
  +fetching: ?boolean,
};

export type State= {
  +all: All,
};
