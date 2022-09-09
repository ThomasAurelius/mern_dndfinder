import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Profile from './components/Profile/Profile';
import { useSelector } from 'react-redux';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const newUser = useSelector((state) => state.user);
  
  const [showForm, setShowForm] = useState(false);
 
console.log(showForm)
  return (
    <BrowserRouter basename='/'>
      <Container maxWidth="xl">
        <Navbar showForm={showForm} setShowForm={setShowForm} />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact>
            <Home showForm={showForm} setShowForm={setShowForm} />
          </Route>
          <Route path="/posts/search" exact>
             <Home showForm={showForm} setShowForm={setShowForm} />
          </Route> 
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;