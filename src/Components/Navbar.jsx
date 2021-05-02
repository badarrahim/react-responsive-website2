import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from './../img/logo.png';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
const Header = () => {
    const mystyle = {
        color: "black",
    };
    return (
        <>
            <Navbar className="navbar" bg="light" expand="lg">
                <Navbar.Brand to="/"><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto mb-2 mb-lg-0 " >
                        <Link to="/" className="m-3" style={mystyle}>Home</Link>
                        <Link to="/about" className="m-3" style={mystyle}>About</Link>
                        <Link to="/services" className="m-3" style={mystyle}>Services</Link>
                        <Link to="/connect" className="m-3" style={mystyle}>Connect</Link>
                        <Link to="/team" className="m-3" style={mystyle}>Team</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header;
