import React from 'react'

class Requested extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		// console.log('Requested.render')
		return (
			<div>
				requested page 4444
			</div>
		)
	}
}

export default Requested


// 'use strict';

// var React = require('react');

// var List = require('../requested/requestedclasseslist');
// var RequestedClassesStore = require('../../stores/requestedclassesstore');
// var Bottom = require('./bottom');

// module.exports = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			requestedClasses: []
// 		}
// 	},
// 	componentWillMount: function () {
// 		this.setState({ requestedClasses: RequestedClassesStore.getAll() })
// 	},
// 	render: function () {
// 		return (
// 			<div>
// 				<List requestedClasses={this.state.requestedClasses} />
// 				<Bottom />
// 			</div>
// 		)
// 	}
// });


