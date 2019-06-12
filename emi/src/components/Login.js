import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Grid, Typography, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { login, reset } from '../redux/actions/login.actions';
import Alert from './Alert';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	componentDidMount = () => {
		this.props.reset();
	};

	onInputChange = e => {
		this.props.reset();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onFormSubmit = e => {
		e.preventDefault();
		const { login, history } = this.props;
		login(this.state, history);
	};

	render() {
		const { classes, loading, successMessage, errorMessage, logoutMessage } = this.props;
		const { username, password } = this.state;
		return (
			<Grid container component="main" className={classes.root}>
			  <CssBaseline />
			  <Grid item xs={false} sm={4} md={7} className={classes.image} />
			  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
				  <Avatar className={classes.avatar}>
					<FontAwesomeIcon icon={faLock} />
				  </Avatar>
				  <Typography component="h1" variant="h5">
					Login
				  </Typography>
				  {successMessage && <Alert variant="success" message={successMessage} />}
				  {errorMessage && <Alert variant="error" message={errorMessage} />}
				  {logoutMessage && <Alert variant="success" message={logoutMessage} />}
				  <form className={classes.form} noValidate onSubmit={this.onFormSubmit}>
					<TextField
					  variant="outlined"
					  margin="normal"
					  required
					  fullWidth
					  label="Username"
					  name="username"
					  value={username}
					  onChange={this.onInputChange}
					  autoFocus
					/>
					<TextField
					  variant="outlined"
					  margin="normal"
					  required
					  fullWidth
					  label="Password"
					  type="password"
					  name="password"
					  value={password}
					  onChange={this.onInputChange}
					/>
					<Button
					  type="submit"
					  fullWidth
					  variant="contained"
					  color="primary"
					  className={classes.submit}
					>
					  	{!loading && `Login`}
						{loading && <CircularProgress size={25} />}
					</Button>
				  </form>
				</div>
			  </Grid>
			</Grid>
		  );
	}
}

const mapStateToProps = state => ({
	loading: state.loginReducer.loading,
	successMessage: state.loginReducer.successMessage,
	errorMessage: state.loginReducer.errorMessage,
	logoutMessage: state.logoutReducer.logoutMessage
});

const mapDispatchToProps = {
	login,
	reset
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Login)));