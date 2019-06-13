import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { teal } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { list, setSelectedMessage } from '../redux/actions/message.actions';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
	avatar: {
		backgroundColor: teal[500],
	},
}));


const MessageList = ({ messages, loading, list, setSelectedMessage }) => {
	const classes = useStyles();
	useEffect(() => list(), []);

    const MessageListItem = ({ sender, sent, isAnonymous, message }) => {
      return (
        <ListItem button onClick={() => setSelectedMessage(message)} >
          <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Avatar>
          </ListItemAvatar>
          <ListItemText primary={isAnonymous ? 'Anonymous' : sender.username} secondary={new Date(sent).toLocaleString()} />
        </ListItem>
      );
    };

    return (
      <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />
        <List>
			{loading && <CircularProgress />}
			{!loading && messages.map(m => {
				return <MessageListItem key={m._id} sender={m.user} sent={m.created} isAnonymous={m.anonymous} message={m} />
			})}
        </List>
      </Drawer>
    );
};

const mapStateToProps = state => ({
	messages: state.messageReducer.messages,
	loading: state.messageReducer.loading
});

const mapDispatchToProps = {
	list,
	setSelectedMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);