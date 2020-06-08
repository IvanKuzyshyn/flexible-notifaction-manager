import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import Card, { CardContent, CardActions } from "material-ui/Card"
import { Field, Form } from 'react-final-form';
import Snackbar from 'material-ui/Snackbar'
import { CircularProgress } from 'material-ui/Progress'
import { Button } from "material-ui";
import PropTypes from 'prop-types';

import TextField from "../../CommonBundle/components/forms/TextField";
import { isRequired } from "../../CommonBundle/validators/fields";
import HTTP from "../../../services/HTTP";
import {userDataSelector} from "../../UserBundle/selectors/userSelectors";

class DirectMessageScheduler extends Component {

  state = {
    sending: false,
    isSnackVisible: false,
    resultMessage: '',
    formState: { message: '', when: '' },
  };

  closeSnack = () => {
    this.setState({ isSnackVisible: false })
  };

  handleFormSubmit = async (data, form) => {
    try {
      const { token } = this.props.user;
      this.setState({ sending: true });
      await HTTP({
        method: 'post',
        url: 'http://localhost:3001/api/telegram/send',
        data,
        headers: {
          'authorization': token,
        }
      });
      this.setState({ resultMessage: 'Message sent! Enjoy!', isSnackVisible: true, sending: false });
      form.reset();
    } catch (e) {
      this.setState({
        resultMessage: 'Oooops! Message was not sent!',
        isSnackVisible: true,
        sending: false,
      });
    } finally {
      setTimeout(() => {
        this.closeSnack()
      }, 2000);
    }
  };

  render() {
    const { sending, isSnackVisible, resultMessage, formState } = this.state;

    return (
      <Card>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={isSnackVisible}
          onClose={this.closeSnack}
          message={resultMessage}
        />
        <Form
          onSubmit={this.handleFormSubmit}
          initialValues={formState}
          keepDirtyOnReinitialize
          render={({ handleSubmit, submitting, form}) => (
            <form onSubmit={(values) => handleSubmit(values, form)}>
              <CardContent>
                <Field
                  name="message"
                  component={TextField}
                  type="text"
                  placeholder="Type a message..."
                  validate={isRequired}
                  fullWidth
                />
                <Field
                  name="when"
                  component={TextField}
                  type="text"
                  placeholder="Type text when to send a message"
                  fullWidth
                />
              </CardContent>
              <CardActions>
                <Button variant="raised" color="primary" type="submit" disabled={submitting || sending}>
                  Send
                </Button>
                {sending && <CircularProgress />}
              </CardActions>
            </form>
          )}
        />
      </Card>
    )
  }
}

DirectMessageScheduler.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: userDataSelector(state),
});

export default connect(mapStateToProps)(DirectMessageScheduler);
