import React from 'react'

import { Notification, Header, Testing } from './components'

class Root extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Notification />
				<Header />
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

