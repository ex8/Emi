import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/logout.actions';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	rightToolbar: {
		marginLeft: 'auto',
		marginRight: -12,
	},
	linkButton: {
		textDecoration: 'none',
		color: 'white'
	}
}));

const Navigation = ({ isAuthenticated, logout, history }) => {
	const classes = useStyles();

	const onLogout = e => {
		e.preventDefault();
		logout(history);
	};

    const authLinks = (
      <div>
        <Link to='/inbox' className={classes.linkButton}>
          <Button color='inherit'>Inbox</Button>
        </Link>
		<Link to='/account' className={classes.linkButton}>
          <Button color='inherit'>Account</Button>
        </Link>
		<Link to='/logout' className={classes.linkButton}>
          <Button onClick={onLogout} color='inherit'>Logout</Button>
        </Link>
      </div>
    );
    const guestLinks = (
      <div>
          <Link to='/login' className={classes.linkButton}>
            <Button color='inherit'>Login</Button>
          </Link>
          <Link to='/signup' className={classes.linkButton}>
            <Button color='inherit'>Signup</Button>
          </Link>
      </div>
    );

    return (
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                  <Link to="/" className={classes.linkButton}>Emi</Link>
                </Typography>
                <div className={classes.rightToolbar}>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = state => ({
	isAuthenticated: state.loginReducer.isAuthenticated
});

const mapDispatchToProps = {
	logout
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));