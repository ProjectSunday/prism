import React from 'react'

import { Link } from 'react-router'

import { testing1, testing2 } from '../../actions/actions'


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
				<button onClick={() => testing1()}>Testing1</button>
				<button onClick={() => testing2()}>Testing2</button>
			</div>
		)
	}

}


/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

<RequestedClassesList requestedClasses={this.state.requestedClasses} />

*/

export default Testing



