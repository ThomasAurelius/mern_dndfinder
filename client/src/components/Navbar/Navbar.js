import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memoriesLogo from '../images/memories-Logo.png';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

import { IoCreateOutline } from 'react-icons/io5';

import Form from '../Form/Form';

const Navbar = ({ showForm, setShowForm, handleOpen, setOpen}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [showMenu, setShowMenu] = useState(false);


  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  //I dont think this is working as intended.
  //When its been over an hour, instead of logging out, it just refreshes /posts.
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps


  const toggleForm = () => {    
    setShowForm(prevShowForm => prevShowForm = !showForm);
  }

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => prevShowMenu = !showMenu);
  }
  

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <Typography variant='h2' className={classes.logoName} >GameMatch</Typography>
        <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
      </Link>
      <Toolbar className={classes.toolbar}>
          
        {user?.result ? (
          <>
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
              
              <div className={classes.headerMenuParent}>
                <Button onClick={toggleMenu} className={classes.toggleButton} variant='contained' size="medium">Menu</Button>
                {showMenu === true ?
                <div className={classes.headerMenu}>
                  <Button onClick={toggleForm} className={classes.createButton} variant="contained" color="primary" size="medium" startIcon={<IoCreateOutline />}>Options</Button>
                  <Button variant="contained" onClick={(e) => {
                    e.stopPropagation();
                    handleOpen()
                    setOpen(true)
                  }}>Create Post (NOT WORKING)</Button>
                  <Button variant="contained" className={classes.profileButton}>
                  <Link to='/profile'>Profile</Link>
                  </Button>
                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                  
                </div>
                : null}
              </div>
            </div>
            
          </>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;