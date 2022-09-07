import { Paper, Typography, Card } from '@material-ui/core';
import React  from 'react';
import useStyles from './styles';


const Profile = () => {

  const classes = useStyles();

  return (
    <>
      <Paper elevation={3}>
         <Card className={classes.card} raised elevation={6}>
            <Typography>PROFILE</Typography>
            <Typography>USER</Typography>
         </Card>
      </Paper>
    </>
  )
}

export default Profile