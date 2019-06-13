import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MessageList from './MessageList';
import MessageDetail from './MessageDetail';
import MessageForm from './MessageForm';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	toolbar: theme.mixins.toolbar,
}));

const Inbox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      <main className={classes.content}>
        <MessageDetail />
      </main>
      <MessageForm />
    </div>
  );
}

export default Inbox;