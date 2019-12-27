import React from 'react';
import Navbar from '../src/pages/components/Navbar'
import './App.css';





function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
