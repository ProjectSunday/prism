'use strict';

var React = require('react');

var List 	= require('../home/requestedclasseslist');  //todo: change to different list
var Bottom 	= require('./bottom');

module.exports = React.createClass({
	render: function () {

		var requestedClasses = [
			{ id: "1111", name: 'class id 1111', imageUrl: 'images/class/music.png' },
			{ id: "2222", name: 'class id 2222', imageUrl: 'images/class/other.png' },
			{ id: "3333", name: 'class id 3333', imageUrl: 'images/class/performing-arts.png' }
		]
		
		return (
			<div>
				<List requestedClasses={requestedClasses} />
				<Bottom />
			</div>
		)
	}
});


