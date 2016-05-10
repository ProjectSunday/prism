import React from 'react'
import { Link } from 'react-router'

import { Well } from 'react-bootstrap'

export default class RequestedActions extends React.Component {
	render() {
		return (
			<Well bsStyle="large">
			    <div className="col-md-4 col-md-offset-2 col-xs-6">
			        <h4>Don't see your class?</h4>
			        <Link to="/requested-create" className="btn btn-lg btn-primary">Request it here</Link>
			    </div>
			    <div className="col-md-4 col-sm-5 col-xs-6">
			        <h4>See a class you can teach?</h4>
			        <Link to="/about" className="btn btn-lg btn-primary">Sign up to teach</Link>
			    </div>
			</div>
		)
	}
}

