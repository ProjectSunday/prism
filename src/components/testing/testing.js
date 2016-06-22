import React from 'react'

import { Link } from 'react-router'

import { testing1, testing2 } from '../../actions/actions'


// import 'bootstrap'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './testing.sass'

class Testing extends React.Component {
	render() {
		return (
			<div className="testing-container">
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



