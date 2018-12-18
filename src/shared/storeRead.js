// @flow

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  storeState: state,
});

export default connect(mapStateToProps);
