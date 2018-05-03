import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserBoard from '../components/UserBoard';

class UserBoardContainer extends Component {

  componentDidMount() {
    // Send request for board statistics
  }

  render() {
    return <UserBoard />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserBoardContainer);
