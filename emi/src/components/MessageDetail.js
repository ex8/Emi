import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Tooltip } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    card: {
        flex: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: teal[500],
    },
}));

const MessageDetail = () => {
  const classes = useStyles();

  return (
	<Card className={classes.card}>
		<CardHeader
			avatar={
			<Avatar aria-label="Avatar" className={classes.avatar}>
				<FontAwesomeIcon icon={faEnvelopeOpenText} />
			</Avatar>
			}
			title={'fff'}
			subheader={'fff'}
		/>
		<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
				No message selected.
			</Typography>
		</CardContent>
        <CardActions disableSpacing>
			<Tooltip title="Reply" placement="bottom">
			<IconButton aria-label="Reply">
				<FontAwesomeIcon icon={faReply} />
			</IconButton>
			</Tooltip>
		</CardActions>
    </Card>
  );
};

export default MessageDetail;