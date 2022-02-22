import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Navbar from './components/layout/Navbar';

import NotepadState from './context/NotepadState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <NotepadState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </NotepadState>
  );
}

export default App;
