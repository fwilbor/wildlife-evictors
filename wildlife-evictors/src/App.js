import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from '../src/pages/AboutUs';
import Home from '../src/pages/Home';
import Wildlife from '../src/pages/Wildlife';
import Other from '../src/pages/Other';






function App() {
  return (
    <Router>
      <div className="App">


        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/wildlife' component={Wildlife} />
            <Route exact path='/other' component={Other} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
