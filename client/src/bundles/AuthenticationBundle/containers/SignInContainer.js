import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInForm from '../components/SignInForm';

class SignInContainer extends Component {
  handleSubmitForm = () => {};

  handleChangeAnyFormField = () => {};

  render() {
    return (
      <SignInForm
        onSubmit={this.handleSubmitForm}
        onChange={this.handleChangeAnyFormField}
      />
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
