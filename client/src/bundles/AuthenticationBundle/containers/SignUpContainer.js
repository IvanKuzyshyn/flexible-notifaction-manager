import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RegistrationForm from '../components/SignUpForm';
import { registerUserAction } from '../reducers/authenticationReducer';

class RegistrationContainer extends Component {
  static propTypes = {
    registerUserAction: PropTypes.func.isRequired,
  };

  handleChangeFormField = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleSubmitRegistrationForm = () => {
    const { registerUserAction: registerUser } = this.props;

    registerUser(this.state);
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
  bindActionCreators({ registerUserAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  RegistrationContainer,
);
