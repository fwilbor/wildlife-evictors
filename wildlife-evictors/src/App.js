import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/pages/components/Navbar';
import './App.css';
import Logo from '../src/welogo.png';
import AboutUs from '../src/pages/AboutUs';





function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={Logo} alt="website logo" />
          <Navbar />
          <h1>Wildlife Evictors</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is the Future Site of Wildlife Evictors
        </a>
        </header>
      </div>
      <div className="container">
        <Switch>

          <Route exact path='/about' component={AboutUs} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
