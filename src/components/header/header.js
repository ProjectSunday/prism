import React from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row } from 'react-bootstrap'

import { SearchControl, UserProfile, NavBar } from '~/components/components'
import { navigate } from '~/actions/actions'

import './header.sass'

export default class Header extends React.Component {
    render() {
        return (
            <Grid className="header" fluid>
                <Row>
                    <Col className="header-nav" lg={6} md={6} sm={6} xs={12} >
                        <NavBar />
                    </Col>
                    <Col className="header-search-user" lg={6} md={6} sm={6} xs={12}>
                        <SearchControl />
                        <UserProfile />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

