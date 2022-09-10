import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';


import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = ({ showForm}) => {
   
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();




  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

 

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          
         
          <Grid  item xs={12} sm={6} md={3} style={{ display: !showForm ? 'block' : 'none'}}>
           
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Games" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />

             
             
              <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
            

            
              
                <Form currentId={currentId} setCurrentId={setCurrentId} handleOpen={handleOpen} handleClose={handleClose} open={open} setOpen={setOpen} />
            
           
              
          </Grid>
           
          <Grid item style={{}} xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} handleOpen={handleOpen} handleClose={handleClose} open={open} setOpen={setOpen} />
          </Grid>
          
        </Grid>
          {(!searchQuery && !tags.length) && (
                <Paper className={classes.pagination} elevation={6}>
                  <Pagination page={page} />
                </Paper>
              )}
            
      </Container>
    </Grow>
  );
};

export default Home;