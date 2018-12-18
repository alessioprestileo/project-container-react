// @flow

import type { DraftsData } from '../../../types/form';

export type Drafts = {
  +data: DraftsData,
};

export type State= {
  +drafts: Drafts,
};
