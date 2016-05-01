import React from 'react'
import { Link } from 'react-router'

import { Nav, Navbar, NavItem, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        // let nav = {
        //     className: 'navbar navbar-default',
        //     role: 'navigation',
        //     style: {
        //         // minHeight: '60px'
        //         // borderRadius: '0px'
        //     }
        // }

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

        let classesStyle = {
            textDecoration: 'none'
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link {...home}><img {...logo}/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Classes" id="blah">
                            <MenuItem>Upcoming Classes</MenuItem>
                            <MenuItem>Requested Classes</MenuItem>
                        </NavDropdown>
                        <NavItem>Learn</NavItem>
                        <NavItem>Teach</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

        // return (
        //  <nav {...nav}>
        //      <div className="container-fluid">
        //        <div className="navbar-header">
        //            <Link {...home}>
        //              <img {...logo}/>
        //            </Link>
        //          </div>
        //        <div className="collapse navbar-collapse">
        //            <ul className="nav navbar-nav">
        //          <li className="dropdown">
        //            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Classes <span className="caret"></span></a>
        //            <ul className="dropdown-menu" role="menu">
        //              <li><Link to="/about">Upcoming Classes</Link></li>
        //              <li><Link to="/requested">Requested Classes</Link></li>
        //            </ul>
        //          </li>
        //          <li className="dropdown">
        //            <DropdownButton title="Classes" bsStyle="lg">
        //              <MenuItem><Link to="/about">Upcoming Classes</Link></MenuItem>
        //              <MenuItem><Link to="/requested">Requested Classes</Link></MenuItem>
        //            </DropdownButton>
        //          </li>

        //              <li><Link to="/about">Learn</Link></li>
        //              <li><Link to="/about">Teach</Link></li>
        //            </ul>
        //            <ul className="nav navbar-nav navbar-right">
        //              <form className="navbar-form navbar-left" role="search" action="http://www.google.com/search" method="get">
        //                  <div className="form-group">
        //                    <input  type="hidden" name="output" value="googleabout" />
        //                    <input  type="hidden" name="sitesearch" value="locallearners.net" />
        //                    <input  type="text"   name="q" className="headerSearchBox form-control" placeholder="Click or type / to Search" ng-model="searchText" id="headerSearchBox" autoComplete="off" ng-focus="searchBoxOnFocus()" />
        //                    <button type="submit" className="btn btn-info">
        //                      <span className="glyphicon glyphicon-search" title="Submit"></span>
        //                    </button>
        //                  </div>
        //              </form>
        //            </ul>
        //        </div>
        //      </div>
        //  </nav>
        // )
    }
}

