import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import Tooltip from 'material-ui/Tooltip';

import {
  childrenType,
  materialUiClassesType,
} from '../../prop-types/shared-types';
import ApplicationMenu from './Menu';
import { Consumer } from "../../../UserBundle/context/UserContextProvider";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Layout extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    userSignOutAction: PropTypes.func.isRequired,
    children: childrenType.isRequired,
    classes: materialUiClassesType.isRequired,
  };

  state = {
    userActionsAnchorEl: null,
    isMobileMenuOpened: false,
  };

  handleOpenUserActions = event => {
    this.setState({ userActionsAnchorEl: event.currentTarget });
  };

  handleCloseUserActions = () => {
    this.setState({ userActionsAnchorEl: null });
  };

  handleToggleMobileMenu = () => {};

  render() {
    const { userActionsAnchorEl, isMobileMenuOpened } = this.state;
    const {
      classes,
      children,
      userSignOutAction: onSignIn,
      title,
    } = this.props;

    return (
      <Consumer>
        {user => (
          <div className={classes.root}>
            <Grid container>
              <Hidden only={['xs', 'sm', 'md']}>
                <Grid item xs={0} lg={2}>
                  <ApplicationMenu />
                </Grid>
              </Hidden>
              <Grid item xs={12} lg={10}>
                <Drawer
                  open={isMobileMenuOpened}
                  onClose={this.handleToggleMobileMenu}
                >
                  <ApplicationMenu />
                </Drawer>
                <div className={classes.root}>
                  <AppBar position="static">
                    <Toolbar>
                      <Hidden only={['lg', 'xl']}>
                        <IconButton
                          color="inherit"
                          aria-label="Menu"
                          onClick={this.handleToggleMobileMenu}
                          className={classes.menuButton}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Hidden>
                      <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                      >
                        {title}
                      </Typography>
                      <div>
                        <Tooltip title={`${user.firstName} ${user.lastName}`} placement="bottom">
                          <IconButton
                            aria-owns={userActionsAnchorEl ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleOpenUserActions}
                            color="inherit"
                          >
                            <AccountCircle />
                          </IconButton>
                        </Tooltip>
                        <Menu
                          id="menu-appbar"
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(userActionsAnchorEl)}
                          onClose={this.handleCloseUserActions}
                        >
                          <MenuItem>Profile</MenuItem>
                          <MenuItem onClick={onSignIn}>Logout</MenuItem>
                        </Menu>
                      </div>
                    </Toolbar>
                  </AppBar>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      {children}
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
      </Consumer>
    );
  }
}

export default withStyles(styles)(Layout);
