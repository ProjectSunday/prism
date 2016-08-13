import React from 'react'
import { Link } from 'react-router'

import { testing1, testing2 } from '../../actions/actions'

export default class Testing extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<span> | </span>
				<Link to="/requested">Requested</Link>
				<button onClick={() => testing1()}>Testing1</button>
				<button onClick={() => testing2()}>Testing2</button>
				<select value="3" onChange={() => alert('yo')}>
					<option>blah</option>
					<option>blah</option>
					<option>blah</option>
					<option>blah</option>
					<option value="3">3333</option>
				</select>


				<select onChange={() => alert('blah')}>
				           <option value="1">1</option>
				           <option value="2">2</option>
				</select>


			</div>
		)
	}
}


/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

<RequestedClassesList requestedClasses={this.state.requestedClasses} />

*/





