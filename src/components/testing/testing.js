import React from 'react'

import { Link } from 'react-router'

class Testing extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		var testingAttr = {
			style: {
				background: '#DCD9B0'
			}
		}

		return (
			<div {...testingAttr}>
				<Link to="/">Home</Link>
				<span> | </span>
				<Link to="/requested">Requested</Link>
			</div>
		)
	}

}


/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

<RequestedClassesList requestedClasses={this.state.requestedClasses} />

*/

export default Testing



