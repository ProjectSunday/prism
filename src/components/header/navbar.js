import React from 'react'
import { Link } from 'react-router'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { navigate } from '../../actions'

import './navbar.sass'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Navbar className="prism-navbar" >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="home" to="/">
                            <img className="logo" src={IMAGES.logo} alt="Local Learners Logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Classes" id="blah">
                            <MenuItem onClick={() => navigate('/about')}>Upcoming Classes</MenuItem>
                            <MenuItem onClick={() => navigate('/requested')}>Requested Classes</MenuItem>
                        </NavDropdown>
                        <NavItem onClick={() => navigate('/about')}>Learn</NavItem>
                        <NavItem onClick={() => navigate('/about')}>Teach</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

