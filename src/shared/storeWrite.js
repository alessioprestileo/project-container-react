// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';
import type { Action } from '../types/redux/actions';

const mapDispatchToProps = (dispatch: Dispatch<Action>): Object => ({
  storeActions: bindActionCreators(actionCreators, dispatch),
});

export default connect(null, mapDispatchToProps);
