import { Typography, Card, CardContent } from '@material-ui/core';
import React  from 'react';
import useStyles from './styles';


const Messages = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const classes = useStyles();

  return (
    <>      
      <Card className={classes.card} raised elevation={6}>
         <CardContent>
               <Typography component="h3" variant="h3">Messages</Typography>
            <div className={classes.messages}>   
               
               
            </div>
            
         </CardContent>
      </Card>
      
    </>
  )
}

export default Messages