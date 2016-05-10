import React from 'react'

import { TopUpcoming, RequestedTiles } from '../components'


export default class Home extends React.Component {
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
