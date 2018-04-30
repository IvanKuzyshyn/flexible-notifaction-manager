import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { userSignInAction } from "../reducers/authenticationReducer";
import SignInForm from '../components/SignInForm';

class SignInContainer extends Component {
  static propTypes = {
    userSignInAction: PropTypes.func.isRequired,
    authenticating: PropTypes.bool.isRequired,
  };

  handleSubmitForm = () => {
    const { userSignInAction: signIn } = this.props;

    signIn(this.state);
  };

  handleChangeAnyFormField = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  render() {
    const { authenticating } = this.props;

    return (
      <SignInForm
        onSubmit={this.handleSubmitForm}
        onChange={this.handleChangeAnyFormField}
        isSigningIn={authenticating}
      />
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  authenticating: authentication.authenticating,
});
const mapDispatchToProps = dispatch => bindActionCreators({ userSignInAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
