import React from 'react'
import { Link } from 'react-router'

import { dispatch, store } from '~/store/store'
import { testing1, testing2 } from '../../actions/actions'

export default class Testing extends React.Component {
	constructor() {
		super()
	}

	testing3 = () => {
		dispatch({
			type: 'UI_SET_SELECTED_CATEGORY',
			value: '57aa3e66f1559508d2779f86'
		})
	}
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<span> | </span>
				<Link to="/requested">Requested</Link>
				<button onClick={() => testing1()}>Testing1</button>
				<button onClick={() => testing2()}>Testing2</button>
				<button onClick={this.testing3}>Testing3</button>
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





