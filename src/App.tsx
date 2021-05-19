import './App.css';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { CreateStoryRoute } from './components/CreateStoryRoute';
import { ListStoriesRoute } from './components/ListStoriesRoute';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <nav> <Link to="/saved">See Saved Stories</Link> </nav>
        <nav> <Link to="/create">Create a New Story</Link> </nav>
        <h1>GC Mad Libs</h1>

        <Switch>
          <Route path="/saved">
            <ListStoriesRoute />
          </Route>
          <Route path="/create">
            <CreateStoryRoute />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
