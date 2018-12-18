// @flow

import type { WidthBreakPoints } from '../../../types/redux/windowSize/reducers';
import initialState from '../../../project/src/initialState';
import { WINDOWSIZE_WIDTHBREAKPOINTS } from '../../actions/windowSize/actionTypes';

const widthBreakPoints: WidthBreakPoints =
  (state = initialState.windowSize.widthBreakPoints, action) => {
    switch (action.type) {
      case WINDOWSIZE_WIDTHBREAKPOINTS:
        return { ...state, data: action.payload.data };

      default:
        (action: empty);
        return state;
    }
  };

export default widthBreakPoints;
