import React from 'react'
import { Button, Modal, TextField, Paper, Typography } from '@material-ui/core'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { updateGames } from '../../../actions/user';

function EditGameModal() {

   const user = JSON.parse(localStorage.getItem('profile'));
   const dispatch = useDispatch();
   const [userData, setUserData] = React.useState(user.result);
   const [openEditGames, setOpenEditGames] = React.useState(false);
   const [games, setGames] = React.useState(user?.result.games);
   const handleChangeGames = (e) => setGames(e.target.value);
  const handleOpenEditGames = () => setOpenEditGames(true);
  const handleCloseEditGames = () => setOpenEditGames(false);

   const classes = useStyles();

  const handleSubmit = (e) => {
      e.preventDefault();
       dispatch(updateGames({ ...userData, user: user?.result?.games }));
   }

   

  return (
    <>
    <Button variant="contained" color="primary" onClose={handleCloseEditGames} onClick={handleOpenEditGames}>Edit Games</Button>
      <Modal
      open={openEditGames}
      onClose={handleCloseEditGames}
      >
         <Paper className={classes.paper} elevation={6}>
            <form className={classes.form} onSubmit={handleSubmit}>
               <Typography component="h3" variant="h3">Edit Games</Typography>
               <Typography component="p" >Use a comma, to separate games</Typography>
               <TextField name="games" id='games'  variant="outlined" label="Games" fullWidth value={games} onChange={handleChangeGames} />
               <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
               <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={handleCloseEditGames} fullWidth>Clear</Button>
            </form>
         
         </Paper>
      </Modal>
    </>
  )
}

export default EditGameModal