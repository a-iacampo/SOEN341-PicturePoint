//React
import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

//Style
const useStyles = makeStyles({
    card: {
      width: 700,
      backgroundColor: 'whitesmoke',
      padding: 10,
      marginTop: 10,
      marginBottom: 10
    },
    avatar: {
      marginTop: 30,
      marginRight: 10
    },
    avatarSize: {
        fontSize: '40px',
        width: '80px',
        height: '80px'
    },
    posBottom: {
        marginTop: 20,
    },
    editIcon: {
        marginLeft: 300
    }
});

function ProfileCard(props) {
    const classes = useStyles();

    //Login user properties
    var user = props.currentUser;
    var initial = props.userInitial;
    var date = new Date(user.creationDate);

    //Renders the profile card
    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Card className={classes.card}>
                    <Grid container>
                        <Grid item className={classes.avatar}>
                            <Avatar className={classes.avatarSize}>{initial}</Avatar>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Typography variant="h3" color="inherit">
                                    {user.username}
                                </Typography>
                                <Typography variant="h5">
                                    {user.name}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {user.email}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    This is my bio!
                                </Typography>
                                <Typography className={classes.posBottom} variant="body2" color="textSecondary">
                                    Member since {date.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <Fab className={classes.editIcon} size="small" color="secondary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </div>
    );
}

export default ProfileCard;