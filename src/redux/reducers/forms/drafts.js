// @flow

import initialState from '../../../project/src/initialState';
import { FORMS_DRAFTS_UPDATE } from '../../actions/forms/actionTypes';
import type { Drafts } from '../../../types/redux/forms/reducers';

const drafts: Drafts = (state = initialState.forms.drafts, action) => {
  switch (action.type) {
    case FORMS_DRAFTS_UPDATE:
      return { data: { ...(state.data), ...(action.payload.data) } };

    default:
      (action: empty);
      return state;
  }
};

export default drafts;
