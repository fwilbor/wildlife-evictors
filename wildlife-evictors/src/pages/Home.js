import React, { Fragment } from 'react';
import Logo from '../welogo.png';
import Youtube from '../pages/components/Youtube';
import Navbar from '../pages/components/Navbar'

const Home = () =>
    <Fragment>
        <header className="App-header">
            <img src={Logo} alt="website logo" />
            <Navbar />
            <h1>Wildlife Evictors</h1>
            <div>
                <Youtube />
            </div>
            <br></br>


            <a
                className="App-link"
                href="http://wildlife-evictors.com/wp/"
                target="_blank"
                rel="noopener noreferrer"
            >
                This is the Old Site of Wildlife Evictors
  </a>
        </header>


    </Fragment>

export default Home;
