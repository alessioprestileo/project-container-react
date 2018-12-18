// @flow

import type { Action as FormsAction } from './forms/actions';
import type { Action as LanguagesAction } from './languages/actions';
import type { Action as TranslationAction } from './translation/actions';
import type { Action as RouterAction } from './router/actions';
import type { Action as SingletonsAction } from './singletons/actions';
import type { Action as SystemAction } from './system/actions';
import type { Action as WindowSizeAction } from './windowSize/actions';

export type Action =
  FormsAction |
  LanguagesAction |
  RouterAction |
  SingletonsAction |
  SystemAction |
  TranslationAction |
  WindowSizeAction;

export type ActionCreator = Object => Action;
