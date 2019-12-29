import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/pages/components/Navbar';
import './App.css';
import Logo from '../src/welogo.png';
import AboutUs from '../src/pages/AboutUs';
import Home from '../src/pages/Home';
import Wildlife from '../src/pages/Wildlife';
import Other from '../src/pages/Other';
import Youtube from '../src/pages/components/Youtube';





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
