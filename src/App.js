import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import { Link } from 'react-router-dom';

import NotepadState from './context/NotepadState';
import Home from './components/pages/Home';
import NotePage from './components/pages/NotePage';
import NotFound from './components/pages/NotFound';

import CustomAlert from './components/layout/CustomAlert';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from "@material-ui/core";

function App() {
  return (
    <NotepadState>
      <Router>
        <div className='App'>
          <AppBar position="static" >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/' color="secondary">Notepad</Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <Container maxWidth='md'>
            <CustomAlert />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/note/:id' component={NotePage} />
              <Route exact path='/note/' component={NotePage} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>

      </Router>
    </NotepadState >
  );
}

export default App;
