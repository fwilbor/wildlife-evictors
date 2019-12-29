import React from 'react';
import { BrowserRouter } from "react-router-dom";

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

    return (

        <BrowserRouter>
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon} /> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <Link to="/about">
                        <li>
                            About Us
                    </li>
                    </Link>
                    <li>
                        <Link to="/wildlife">Wildlife Removal</Link>
                    </li>
                    <li>
                        <Link to="/other">Other Services</Link>
                    </li>
                    <li>
                        <Link to="/facebook">Facebook Site</Link>
                    </li>
                    <li>
                        <Link to="/youtube">Youtube Site</Link>
                    </li>
                </ul>
            </nav>

        </BrowserRouter>

    );

}

Navbar.defaultProps = {
    title: 'Nuisance Wildlife Control',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
