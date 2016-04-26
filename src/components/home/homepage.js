var React = require('react');

var UpcomingClassesList = require('../upcoming/upcomingclasseslist');
var RequestedClassesList = require('../requested/requestedclasseslist');;
var RequestedClassesStore = require('../../stores/requestedclassesstore');


module.exports = React.createClass({
	getInitialState: function () {
		return {
			upcomingClasses: [],
			requestedClasses: []	
		}
	},
	componentWillMount: function () {
		this.setState({ 
			upcomingClasses: [], 
			requestedClasses: RequestedClassesStore.getAll() 
		});
	},
	render: function () {
		return (
			<div>
				<div>banner needs to go here</div>

				<UpcomingClassesList upcomingClasses={this.state.upcomingClasses} />
				
				<RequestedClassesList requestedClasses={this.state.requestedClasses} />
				
			</div>
		)
	}
});


