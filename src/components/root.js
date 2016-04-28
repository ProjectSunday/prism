import React from 'react'

import { Testing } from '../components'

class Root extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>

				<div>banner needs to go here 8888</div>
				{this.props.children}

				<Testing />
			</div>
		)
	}

}


/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

<RequestedClassesList requestedClasses={this.state.requestedClasses} />

*/

export default Root



//trash


// componentWillMount: function () {
// 	this.setState({ 
// 		upcomingClasses: [], 
// 		requestedClasses: RequestedClassesStore.getAll() 
// 	});
// },

// module.exports = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			upcomingClasses: [],
// 			requestedClasses: []	
// 		}
// 	},
// });

