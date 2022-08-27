import React, { useState, useEffect } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import Input from './Input';
import Icon from './icon';
import jwt_decode from "jwt-decode";

import useStyles from './styles';
import { NoEncryption } from '@material-ui/icons';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({})
 
{/*Google Sign in*/}



const handleSignOut = () => {
      console.log("Sign out");
      setUser({});
      document.getElementById("signInDiv").hidden = false;   
      dispatch({ type: 'LOGOUT' });  
   }

  


{/*Manual Sign in*/} 

//gets a 400 response if the email is in use when trying to sign up

   const handleSubmit = (e) => {
      e.preventDefault();

      if (isSignUp) {
         dispatch(signup(formData, history));
      }
      else {
         dispatch(signin(formData, history));
      }
   }

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

   const switchMode = () => {
      setIsSignUp((prevIsSignUp) => !prevIsSignUp);
      setShowPassword(false);
   }







  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
         <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
         </Avatar>
         <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
         <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
               { isSignUp && (
                  <>
                     <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                     <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                  </>
               )}
               <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
               <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword}  />
               
               { isSignUp && (
                  <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword} />
               )}
            </Grid>
           
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
               {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            {Object.keys(user).length !== 0 && 
               <div id="signOut" className={!user ? classes.hidden : classes.signOut}>
         {/* Button is not hiding correctly.  */}
                  <Button onClick={handleSignOut} fullWidth variant="contained" color="primary" >
                     Sign Out
                  </Button>
               </div>
            }
            
            { user ?
               <>
                  
                  <div>
                     <h1>{user.name}</h1>
                     <h2>{user.email}</h2>
                     <img src={user.picture} alt={user.name} />
                  </div>
               </>
               : null
            }
            <div id="signInDiv" className={classes.signInDiv}>
            
            </div>

            <Grid container justifyContent="flex-end">
               <Grid className={classes.signUpSignIn} item>
                  <Button  onClick={switchMode}>
                     {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                  </Button>
               </Grid>
            </Grid>

         </form>
      </Paper>
   </Container>
  )
}

export default Auth



   



// details: "You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."

     
// google sign in
// useEffect(() => {
//       /* global google */
//       google.accounts.id.initialize({
//          client_id: "448145919233-l1qc7tmomc5ebl68ogs1urmoi9mc1i2m.apps.googleusercontent.com",
//          callback: handleCallBackResponse,
//       });
//       google.accounts.id.renderButton(
//          document.getElementById("signInDiv"),
//          { theme: "outline", size: "large", text: "sign_in" }
//       )
//    }, []);

// const handleCallBackResponse = (response) => {
//       var userObj = jwt_decode(response.credential);
//       console.log(userObj);
//       setUser(userObj);
//       dispatch({ type: 'AUTH', data: userObj });
//       history.push('/');
//    }