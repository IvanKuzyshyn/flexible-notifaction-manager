import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegistrationForm from '../components/RegistrationForm';

class RegistrationContainer extends Component {

  handleChangeFormField = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  render() {
    return <RegistrationForm onChange={this.handleChangeFormField} />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default RegistrationContainer;
