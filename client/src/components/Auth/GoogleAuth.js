import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode';

const GoogleAuth = () => {
   function handleCredentialResponse(response) {
      console.log(response.credential)
      var userObject = jwtDecode(response.credential);
      localStorage.setItem('googleProfile', JSON.stringify({ userObject }));
      
   }

     

   useEffect(() => {
      /* global google */ // this is to avoid the error: 'google' is not defined
      google.accounts.id.initialize({

         client_id: '448145919233-l1qc7tmomc5ebl68ogs1urmoi9mc1i2m.apps.googleusercontent.com',
         callback: handleCredentialResponse
      });

      google.accounts.id.renderButton(
         document.getElementById('signInDiv'),
         {
            theme: 'outline',
            size: 'large',
            longtitle: true,
            type: 'standard',
            text: 'Sign in with Google',
         }
      )
         
         }, [])


  return (
    <div>
      <div id="signInDiv"></div>
    
    </div>
  )
}

export default GoogleAuth