// @flow

import * as actions from '../../../types/redux/windowSize/actions';
import * as actionTypeVariables from './actionTypes';

type CurrentPayload = $PropertyType<actions.Current, 'payload'>;

export const windowSizeCurrent =
  (payload: CurrentPayload): actions.Current => ({
    type: actionTypeVariables.WINDOWSIZE_CURRENT,
    payload,
  });

type WidthBreakPointsPayload = $PropertyType<actions.WidthBreakPoints, 'payload'>;

export const windowSizeWidthBreakPoints =
  (payload: WidthBreakPointsPayload): actions.WidthBreakPoints => ({
    type: actionTypeVariables.WINDOWSIZE_WIDTHBREAKPOINTS,
    payload,
  });
