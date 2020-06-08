import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Snackbar from 'material-ui/Snackbar'

import LayoutContainer from "../../../CommonBundle/containers/layout/LayoutContainer";
import { AVAILABLE_SERVICES } from "../../constants/services";

const NewScheduler = ({ match }) => {
  const service = AVAILABLE_SERVICES[match.params.id];

  if (!service) {
    return (
      <LayoutContainer title="Notifications board">
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} color="" message="Service not found!" open />
      </LayoutContainer>
    )
  }

  const Scheduler = service.component;
  return (
    <LayoutContainer title={`Scheduler new Notification for ${service.name}`}>
      <Scheduler />
    </LayoutContainer>
  )
};

NewScheduler.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(NewScheduler)
