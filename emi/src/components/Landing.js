import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardActionArea, CardContent, Button, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBoxOpen, faBullseye, faCode } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 30
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
  }));

const Landing = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Encrypted Messaging Inbox
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Truthfully send one-way encoded messages that are destroyed once opened.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href="https://github.com/ex8/emi" size="small" color="primary">
                                Source Code
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom align="center" variant="h5" component="h3">
                                Secure
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                All messages are encrypted end-to-end and are terminated upon the recipient viewing the message.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom align="center" variant="h5" component="h3">
                                Reliable
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Simply a platform for sending and receiving messages, barely any information is stored server-side.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                <FontAwesomeIcon icon={faGlobe} size="2x" />
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center" component="p">
                                Send messages to anybody around the world in an instant.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                <FontAwesomeIcon icon={faBoxOpen} size="2x" />
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center" component="p">
                                Once a message is opened and read, it will be destroyed.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                <FontAwesomeIcon icon={faBullseye} size="2x" />
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center" component="p">
                                Be rest assured your message gets to its intended recipient.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                <FontAwesomeIcon icon={faCode} size="2x" />
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center" component="p">
                                Our code is open source and available to view. No hiccups.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Landing;