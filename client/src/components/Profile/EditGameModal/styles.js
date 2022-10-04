import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   paper: {
      display: "flex",
      padding: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
         flexDirection: 'column',
      },
      maxWidth: "80%",
      margin: "auto",

   },
   form: {
      display: 'flex',

      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(3),
   },

}))