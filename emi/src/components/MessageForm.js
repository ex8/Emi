import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Button,
	Dialog,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Slide,
    TextField,
	Checkbox,
	FormControlLabel,
	Paper
} from '@material-ui/core';
import { Fab, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import UserSearchSelect from './UserSearchSelect';
import { connect } from 'react-redux';
import { send } from '../redux/actions/message.actions';

const styles = theme => ({
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	absolute: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(3),
	},
	form: {
        width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(6),
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(600 + theme.spacing(6))]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
	},
	paper: {
		padding: theme.spacing(3, 2)
	}
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class MessageForm extends Component {
	state = {
		open: false,
		selectedRecipient: {},
		isAnonymous: false,
		message: ''
	};

	onOpen = () => this.setState({ open: true });

	onClose = () => this.setState({ open: false });

	onInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onCheckboxChange = e => {
		this.setState({
			[e.target.name]: e.target.checked
		});
	};

	handleChangeSelected = selectedRecipient => {
		this.setState({ selectedRecipient });
	};

	onFormSubmit = e => {
		e.preventDefault();
		const { message, isAnonymous, selectedRecipient } = this.state;
		const { send, user } = this.props;
		send({
			message: message,
			anonymous: isAnonymous,
			recipient: selectedRecipient.value,
			user: user.id
		});
		this.setState({
			open: false,
			selectedRecipient: {},
			isAnonymous: false,
			message: ''
		});
	}

	render() {
		const { classes } = this.props;
		const { open, selectedRecipient, isAnonymous, message } = this.state;
		
		return (
			<div>
				<Tooltip title="Send" aria-label="Send">
					<Fab color="primary" onClick={this.onOpen} className={classes.absolute}>
						<FontAwesomeIcon icon={faPaperPlane} size="lg" />
					</Fab>
				</Tooltip>
				<Dialog fullScreen open={open} onClose={this.onClose} TransitionComponent={Transition}>
					<form onSubmit={this.onFormSubmit}>
						<AppBar className={classes.appBar}>
							<Toolbar>
								<IconButton edge="start" color="inherit" onClick={this.onClose} aria-label="Close">
									<FontAwesomeIcon icon={faTimes} />
								</IconButton>
								<Typography variant="h6" className={classes.title}>
									Send Message
								</Typography>
								<Button type="submit" color="inherit" onClick={this.onClose}>
									Send {selectedRecipient.username && 'to'} {selectedRecipient.username}
								</Button>
							</Toolbar>
						</AppBar>
						<div className={classes.form}>
							{/* <TextField
								variant="outlined"
								required
								fullWidth
								label="Send to"
								name="recipient"
								value={recipient}
								onChange={this.onInputChange}
								autoFocus
							/> */}
							<UserSearchSelect 
								selectedRecipient={selectedRecipient} 
								setSelectedRecipient={this.handleChangeSelected}
							/>
							<Tooltip title="The recpient will not know who sent this message." placement="right">
								<FormControlLabel 
									control={
										<Checkbox 
											name="isAnonymous"
											checked={isAnonymous}
											onChange={this.onCheckboxChange}
											color="primary"
										/>
									}
									label="Send anonymously?"
								/>
							</Tooltip>
							<TextField
								required
								fullWidth
								label="Message"
								name="message"
								value={message}
								onChange={this.onInputChange}
								multiline={true}
								rows={10}
							/>								
						</div>
						<div className={classes.form}>
							<Typography variant="h5">
								Preview Message
							</Typography>
							<Paper className={classes.paper}>
								<Typography variant="h6">
									To: 
								</Typography>
								<Typography variant="h6">
									From: ex8
								</Typography>
								<Typography component="p">
									message
								</Typography>
							</Paper>
						</div>
					</form>
				</Dialog>
			</div>
		);
	};
}

const mapStateToProps = state => ({
	user: state.loginReducer.user
});

const mapDispatchToProps = {
	send
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MessageForm));