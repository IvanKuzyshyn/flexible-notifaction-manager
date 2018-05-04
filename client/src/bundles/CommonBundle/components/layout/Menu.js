import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DashboardIcon from '@material-ui/icons/Dashboard'
import ListIcon from '@material-ui/icons/PlaylistPlay';
import NewIcon from '@material-ui/icons/FiberNew'

import { materialUiClassesType } from '../../prop-types/shared-types';
import { ROOT_ROUTE } from "../../../UserBundle/constants/routes";

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const Menu = ({ classes }) => (
  <div className={classes.root}>
    <List
      component="nav"
      subheader={
        <ListSubheader component="div">Nested List Items</ListSubheader>
      }
    >
      <NavLink to={ROOT_ROUTE}>
        <ListItem divider button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText inset primary="Board" />
        </ListItem>
      </NavLink>
      <ListItem divider button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText inset primary="List" />
      </ListItem>
      <ListItem divider button>
        <ListItemIcon>
          <NewIcon />
        </ListItemIcon>
        <ListItemText inset primary="Create" />
      </ListItem>
    </List>
  </div>
);

Menu.propTypes = {
  // eslint-disable-next-line react/no-typos
  classes: materialUiClassesType.isRequired,
};

export default withStyles(styles)(Menu);
