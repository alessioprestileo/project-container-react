// @flow

import type { State as FormsState } from './forms/states';
import type { State as LanguagesState } from './languages/states';
import type { State as RouterState } from './router/states';
import type { State as SingletonsState } from './singletons/states';
import type { State as SystemState } from './system/states';
import type { State as TranslationState } from './translation/states';
import type { State as WindowSizeState } from './windowSize/states';

export type State = {
  +forms: FormsState,
  +languages: LanguagesState,
  +router: RouterState,
  +singletons: SingletonsState,
  +system: SystemState,
  +translation: TranslationState,
  +windowSize: WindowSizeState,
};
