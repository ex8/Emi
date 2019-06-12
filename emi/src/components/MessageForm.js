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
    List,
    ListItem,
    ListItemText,
    Divider
} from '@material-ui/core';
import { Fab, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

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
		marginTop: theme.spacing(),
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(600 + theme.spacing(6))]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			recipient: '',
			sendAnonymously: false,
			message: ''
		};
	}

	onOpen = () => this.setState({ open: true });

	onClose = () => this.setState({ open: false });


	render() {
		const { classes } = this.props;
		const { open, recipient, } = this.state;
		
		return (
			<div>
				<Tooltip title="Send" aria-label="Send">
					<Fab color="primary" onClick={this.onOpen} className={classes.absolute}>
						<FontAwesomeIcon icon={faPaperPlane} size="lg" />
					</Fab>
				</Tooltip>
				<Dialog fullScreen open={open} onClose={this.onClose} TransitionComponent={Transition}>
					<form>
						<AppBar className={classes.appBar}>
							<Toolbar>
								<IconButton edge="start" color="inherit" onClick={this.onClose} aria-label="Close">
									<FontAwesomeIcon icon={faTimes} />
								</IconButton>
								<Typography variant="h6" className={classes.title}>
									Send Message
								</Typography>
								<Button type="submit" color="inherit" onClick={this.onClose}>
									Send {recipient && 'to'} {recipient}
								</Button>
							</Toolbar>
						</AppBar>
						<List>
                            <ListItem button>
                                <ListItemText primary="Phone ringtone" secondary="Titania" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                            </ListItem>
                        </List>
					</form>
				</Dialog>
			</div>
		);
	};
}

export default withStyles(styles)(MessageForm);