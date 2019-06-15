import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Avatar, IconButton, Typography, Tooltip } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { resetSelectedMessage } from '../redux/actions/message.actions';

const useStyles = makeStyles(theme => ({
    card: {
        flex: 1,
        whiteSpace: 'pre-line',
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

const MessageDetail = ({ selectedMessage, resetSelectedMessage }) => {
    const classes = useStyles();
    useEffect(() => resetSelectedMessage(), []);
    const { created, anonymous, user } = selectedMessage;

    const selected = (
        <div>
            <CardHeader
                avatar={
                <Avatar aria-label="Avatar" className={classes.avatar}>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </Avatar>
                }
                title={selectedMessage.uuid}
                subheader={`${new Date(created).toLocaleString()} from ${anonymous ? 'Anonymous' : user}`}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {selectedMessage.data}
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="Reply" placement="bottom">
                    <IconButton aria-label="Reply">
                        <FontAwesomeIcon icon={faReply} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </div>
    );

    const unselected = (
        <div>
            <CardHeader
                avatar={
                <Avatar aria-label="Avatar" className={classes.avatar}>
                    
                </Avatar>
                }
                title={''}
                subheader={''}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    No message selected.
                </Typography>
            </CardContent>
        </div>
    );

    return (
        <Card className={classes.card}>
            {Object.keys(selectedMessage).length !== 0 ? selected : unselected}
        </Card>
    );
};

const mapStateToProps = state => ({
    selectedMessage: state.messageReducer.selectedMessage
});

const mapDispatchToProps = {
    resetSelectedMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetail);