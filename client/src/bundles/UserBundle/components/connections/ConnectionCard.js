import React from 'react'
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const ConnectionCard = ({ id ,status, name, title }) => {
  const isDisabled = status !== 'connected';

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={isDisabled} color="primary" size="small" href={`/schedule/${id}`}>
          Create New
        </Button>
      </CardActions>
    </Card>
  )
};

ConnectionCard.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['connected', 'not_connected']).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ConnectionCard;
