import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RegistrationForm from '../components/SignUpForm';
import { userSignUpAction } from '../reducers/authenticationReducer';
import { errorResponseType } from '../../CommonBundle/prop-types/response-types';
import { signUpDataSelector } from '../selectors/authenticationSelectors';

class RegistrationContainer extends Component {
  static propTypes = {
    userSignUpAction: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    error: errorResponseType,
  };

  static defaultProps = {
    error: null,
  };

  handleSubmitForm = form => {
    const { userSignUpAction: signUp } = this.props;

    signUp(form);
  };

  handleValidateForm = values => {
    const errors = {};
    const { password, confirmPassword } = values;

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Confirm password must be the same as password!';
    }

    return errors;
  };

  render() {
    const { isProcessing, error } = this.props;

    return (
      <RegistrationForm
        onSubmit={this.handleSubmitForm}
        onValidate={this.handleValidateForm}
        isSigningUp={isProcessing}
        error={error}
      />
    );
  }
}

const mapStateToProps = (state) => signUpDataSelector(state);
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userSignUpAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  RegistrationContainer,
);
