import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RegistrationForm from '../components/SignUpForm';
import { userSignUpAction } from '../reducers/authenticationReducer';

class RegistrationContainer extends Component {
  static propTypes = {
    userSignUpAction: PropTypes.func.isRequired,
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
    return (
      <RegistrationForm
        onSubmit={this.handleSubmitForm}
        onValidate={this.handleValidateForm}
      />
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  registering: authentication.registering,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ userSignUpAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  RegistrationContainer,
);
