import React from 'react'
import { Link } from 'react-router'

import { Grid, Well, Col, Button } from 'react-bootstrap'

import './requestedactions.sass'

export default class RequestedActions extends React.Component {
    render() {
        return (
            <Well className="requested-actions container" bsStyle="large">
                <Col md={4} mdOffset={2} xs={6}>
                    <h4>Don't see your class?</h4>
                    <Link to="/createrequest"><Button bsSize="large" bsStyle="primary">Request it here</Button></Link>
                </Col>
                <Col md={4} sm={5} xs={6}>
                    <h4>See a class you can teach?</h4>
                    <Link to="/about"><Button bsSize="large" bsStyle="primary">Sign up to teach</Button></Link>
                </Col>
            </Well>
        )
    }
}

