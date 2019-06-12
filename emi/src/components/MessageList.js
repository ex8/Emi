import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { teal } from '@material-ui/core/colors';

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


const MessageList = () => {
	const classes = useStyles();
    const messages = new Array(20).fill('');

    const MessageListItem = () => {
      return (
        <ListItem button>
          <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Avatar>
          </ListItemAvatar>
          <ListItemText primary='ex8' secondary={'6/19/22'} />
        </ListItem>
      );
    };

    return (
      <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />
        <List>
			{messages.map(() => <MessageListItem />)}
        </List>
      </Drawer>
    );
};


export default MessageList;