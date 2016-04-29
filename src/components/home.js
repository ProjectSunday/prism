import React from 'react'

import { TopUpcoming } from '../components'


class Home extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div> 
				<TopUpcoming />
			</div>
		)
	}
}

/*

<RequestedClassesList requestedClasses={this.state.requestedClasses} />


*/

export default Home




/// trash, never needed again

// getInitialState: function () {
// 	return {
// 		upcomingClasses: [],
// 		requestedClasses: []	
// 	}
// },
// componentWillMount: function () {
// 	this.setState({ 
// 		upcomingClasses: [], 
// 		requestedClasses: RequestedClassesStore.getAll() 
// 	});
// },
