import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { signup, reset } from '../redux/actions/signup.actions';
import Alert from './Alert';

const styles = theme => ({
	paper: {
		marginTop: theme.spacing(8),
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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});

class Signup extends Component {
	state = {
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		password2: ''
	};

	componentDidMount = () => {
		this.props.reset();
	}

	onInputChange = e => {
		this.props.reset();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.signup(this.state);
	};

	render() {
		const { classes, loading, successMessage, errorMessage } = this.props;
		const { firstName, lastName, username, password, password2 } = this.state;

		return (
			<Container component="main" maxWidth="xs">
			  <CssBaseline />
			  <div className={classes.paper}>
				<Avatar className={classes.avatar}>
				  <FontAwesomeIcon icon={faUserPlus} />
				</Avatar>
				<Typography component="h1" variant="h5">
				  Signup
				</Typography>
				{successMessage && <Alert variant="success" message={successMessage} />}
				{errorMessage && <Alert variant="error" message={errorMessage} />}
				<form className={classes.form} noValidate onSubmit={this.onFormSubmit}>
				  <Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
					  <TextField
						variant="outlined"
						required
						fullWidth
						label="First Name"
						name="firstName"
						value={firstName}
						onChange={this.onInputChange}
						autoFocus
					  />
					</Grid>
					<Grid item xs={12} sm={6}>
					  <TextField
						variant="outlined"
						required
						fullWidth
						label="Last Name"
						name="lastName"
						value={lastName}
						onChange={this.onInputChange}
					  />
					</Grid>
					<Grid item xs={12}>
					  <TextField
						variant="outlined"
						required
						fullWidth
						label="Username"
						name="username"
						value={username}
						onChange={this.onInputChange}
					  />
					</Grid>
					<Grid item xs={12}>
					  <TextField
						variant="outlined"
						required
						fullWidth
						label="Password"
						type="password"
						name="password"
						value={password}
						onChange={this.onInputChange}
					  />
					</Grid>
					<Grid item xs={12}>
					  <TextField
						variant="outlined"
						required
						fullWidth
						label="Confirm Password"
						type="password"
						name="password2"
						value={password2}
						onChange={this.onInputChange}
					  />
					</Grid>
				  </Grid>
				  <Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
					disabled={loading}
				  >
					{!loading && `Signup`}
					{loading && <CircularProgress size={25} />}
				  </Button>
				</form>
			  </div>
			</Container>
		  );
	}
}

const mapStateToProps = state => ({
	loading: state.signupReducer.loading,
	successMessage: state.signupReducer.successMessage,
	errorMessage: state.signupReducer.errorMessage
});

const mapDispatchToProps = {
	signup,
	reset
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Signup));