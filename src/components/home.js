import React from 'react'
// var UpcomingClassesList = require('../upcoming/upcomingclasseslist');
// var RequestedClassesList = require('../requested/requestedclasseslist');;
// var RequestedClassesStore = require('../../stores/requestedclassesstore');


class Home extends React.Component {

	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div> home index

			</div>
		)
	}
}

/*
<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />

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
