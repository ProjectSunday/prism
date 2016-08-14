import React from 'react'
import { Link } from 'react-router'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { Navigation } from '~/actions/actions'

import './navbar.sass'

export default class NavBar extends React.Component {
    navigate = (path) => {
        return () => { Navigation.go(path) }
    }
    render() {
        return (
            <Navbar className="prismnavbar" >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="prismnavbar-home" to="/">
                            <img className="prismnavbar-logo" src={IMAGES.logo} alt="Local Learners Logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Classes" id="blah">
                            <MenuItem onClick={this.navigate('/upcoming')}>Upcoming Classes</MenuItem>
                            <MenuItem onClick={this.navigate('/requested')}>Requested Classes</MenuItem>
                        </NavDropdown>
                        <NavItem onClick={this.navigate('/about')}>Learn</NavItem>
                        <NavItem onClick={this.navigate('/teach')}>Teach</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

