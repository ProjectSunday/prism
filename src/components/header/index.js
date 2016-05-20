import React from 'react'
import { Link } from 'react-router'
import { push } from 'react-router-redux'

import { Button, Nav, Navbar, NavItem, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

import { SearchControl } from '../../components'
import { dispatch } from '../../store'

import './index.sass'

export default class Header extends React.Component {
    constructor(props) {
        super(props)

        this.navClick = this.navClick.bind(this)
    }
    navClick(path) {
        return () => dispatch(push(path))
    }
    render() {

        let home = {
            to: '/',
            style: {
                padding: '10px 0px 0px 12px'
            }
        }

        let logo = {
            src: IMAGES.logo,
            alt: 'Local Learners Logo',
            style: {
                maxHeight: '40px'
            }
        }

        let upcoming = {
            onClick: this.navClick('/about')
        }

        let requested = {
            onClick: this.navClick('/requested')
        }

        let learn = {
            onClick: this.navClick('/about')
        }

        let teach = {
            onClick: this.navClick('/about')
        }


        return (
            <Navbar id="header" fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link {...home}><img {...logo}/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Classes" id="blah">
                            <MenuItem {...upcoming}>Upcoming Classes</MenuItem>
                            <MenuItem {...requested}>Requested Classes</MenuItem>
                        </NavDropdown>
                        <NavItem {...learn}>Learn</NavItem>
                        <NavItem {...teach}>Teach</NavItem>
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

