import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   paper: {
      display: "flex",
      padding: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
         flexDirection: 'column',
      },
      
   },
   
   card: {
      display: 'flex',
      flexDirection: 'column',
      
      minWidth: "300px",
      borderRadius: 35,
      height: '45vh',
      padding: "10px",
   },
   gamesBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '35px',
      padding: "10px",
      minWidth: "200px"
   },
   profileInfo: {
      display: 'flex',
      borderRadius: "35px",
      padding: "10px"
   }

}))