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

  handleChangeFormField = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleSubmitRegistrationForm = () => {
    const { userSignUpAction: signUp } = this.props;

    signUp(this.state);
  };

  render() {
    return (
      <RegistrationForm
        onChange={this.handleChangeFormField}
        onSubmit={this.handleSubmitRegistrationForm}
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
