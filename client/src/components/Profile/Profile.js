import { Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import React  from 'react';
import Messages from '../Messages/Messages';
import EditGameModal from './EditGameModal/EditGameModal';
import useStyles from './styles';


const Profile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  console.log(user)

  const classes = useStyles();

  const createdDate = new Date(user.result.createdAt).toDateString()

  

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
         <Card className={classes.card} raised elevation={6}>
            <CardContent>
                <Typography component="h3" variant="h3">Profile</Typography>
              <div className={classes.profileName}>   
                <Typography component='h4' variant="h4">{user.result.name}</Typography>             
                <Typography>NAME</Typography>                
              </div>
              <div className={classes.dateJoined}>
                <Typography component='h4' variant="h4">{createdDate}</Typography>
                <Typography>DATE JOINED</Typography>
              </div>
              <div className={classes.location}>
                <Typography component='h4' variant="h4">{user.result.location}</Typography>
                <Typography>LOCATION</Typography>
              </div>
            </CardContent>
         </Card>

         <Card raised elevation={6} className={classes.gamesBox}>
            <CardContent >
              <Typography  component="h3" variant="h3">Games</Typography>
              {user?.result.games.map((game) => (
                <Typography key={game} component="p">{game}</Typography>
              ))
            }
            </CardContent>
            <EditGameModal />
         </Card>

         <Card raised elevation={6} className={classes.profileInfo}>
            <CardContent>
              <Typography component="h3" variant="h3">Info</Typography>
              <Typography component="h4" variant="h4">About Me</Typography>
              <Typography compnennt="p">{user?.result.about}</Typography>
            </CardContent>
         
         </Card>
         
      </Paper>
    </>
  )
}

export default Profile