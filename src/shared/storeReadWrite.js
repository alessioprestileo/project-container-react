// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';
import type { Action } from '../types/redux/actions';

const mapStateToProps = state => ({
  storeState: state,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Object => ({
  storeActions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
