import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
         flexDirection: 'column',
      },
   },

   card: {
      display: 'flex',
      flexDirection: 'column',

      borderRadius: 35,
      height: '45vh',
      padding: "10px",
   },

}))