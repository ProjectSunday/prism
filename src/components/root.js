import React from 'react'

// var UpcomingClassesList = require('../upcoming/upcomingclasseslist');
// var RequestedClassesList = require('../requested/requestedclasseslist');;
// var RequestedClassesStore = require('../../stores/requestedclassesstore');


class Root extends React.Component {
	
	constructor(props) {
		super(props)
	}

	// componentWillMount: function () {
	// 	this.setState({ 
	// 		upcomingClasses: [], 
	// 		requestedClasses: RequestedClassesStore.getAll() 
	// 	});
	// },
	render() {
		return (
			<div>
				<div>banner needs to go here</div>

				
			</div>
		)
	}

}
// module.exports = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			upcomingClasses: [],
// 			requestedClasses: []	
// 		}
// 	},
// });


/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

<RequestedClassesList requestedClasses={this.state.requestedClasses} />

*/

export default Root

