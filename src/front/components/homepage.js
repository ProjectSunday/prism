var React = require('react');

var UpcomingClassesList = require('./home/upcomingclasseslist');
var RequestedClassesList = require('./home/requestedclasseslist');

module.exports = React.createClass({
	render: function () {

		var upcomingClasses = [
			{ id: "1111", name: 'class id 1111', imageUrl: 'images/class/automotive.png' },
			{ id: "2222", name: 'class id 2222', imageUrl: 'images/class/business.png' },
			{ id: "3333", name: 'class id 3333', imageUrl: 'images/class/culinary.png' }
		]

		var requestedClasses = [
			{ id: "1111", name: 'class id 1111', imageUrl: 'images/class/music.png' },
			{ id: "2222", name: 'class id 2222', imageUrl: 'images/class/other.png' },
			{ id: "3333", name: 'class id 3333', imageUrl: 'images/class/performing-arts.png' }
		]
		
		return (
			<div>
				<div>banner needs to go here</div>

				<UpcomingClassesList upcomingClasses={upcomingClasses} />
				
				<RequestedClassesList requestedClasses={requestedClasses} />
				
			</div>
		)
	}
});


