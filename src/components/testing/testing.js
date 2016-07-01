import React from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { testing1, testing2 } from '../../actions/actions'

@Radium
export default class Testing extends React.Component {
	render() {
		return (
			<div style={styles.testing}>
				<Link to="/">Home</Link>
				<span> | </span>
				<Link to="/requested">Requested</Link>
				<button onClick={() => testing1()}>Testing1</button>
				<button onClick={() => testing2()}>Testing2</button>
			</div>
		)
	}
}

const styles = {
	testing: {
		css: 'text-danger',
		background: '#DCD9B0'
	}
}


/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

<RequestedClassesList requestedClasses={this.state.requestedClasses} />

*/





