import React from 'react'
import { Link } from 'react-router'

import { Button, Nav, Navbar, NavItem, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

import { SearchControl } from '../../components'
import { navigate } from '../../actions'

import './index.sass'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Navbar id="header" fluid>
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
                    <Nav pullRight>
                        <NavItem className="search-box">
                            <SearchControl />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

