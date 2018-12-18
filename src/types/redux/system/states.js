// @flow

import type { EnvSettings as EnvSettingsImport } from '../../../project/src/types/general';

export type ApiCallFailure = {
  +data: ?Object,
};

export type EnvSettings = {
  +data: ?EnvSettingsImport,
};

export type Styles = {
  +data: ?{[key: string]: string},
};

export type ZerpLegacyMode = {
  +data: ?boolean,
};

export type State= {
  +apiCallFailure: ApiCallFailure,
  +envSettings: EnvSettings,
  +styles: Styles,
  +zerpLegacyMode: ZerpLegacyMode,
};
