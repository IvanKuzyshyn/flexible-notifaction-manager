import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userSignInAction } from '../reducers/authenticationReducer';
import SignInForm from '../components/SignInForm';
import { errorResponseType } from '../../CommonBundle/prop-types/response-types';
import { signInDataSelector } from '../selectors/authenticationSelectors';

class SignInContainer extends Component {
  static propTypes = {
    userSignInAction: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    error: errorResponseType,
  };

  static defaultProps = {
    error: null,
  };

  handleSubmitForm = form => {
    const { userSignInAction: signIn } = this.props;

    signIn(form);
  };

  render() {
    const { isProcessing, error } = this.props;

    return (
      <SignInForm
        onSubmit={this.handleSubmitForm}
        isSigningIn={isProcessing}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => signInDataSelector(state);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userSignInAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
