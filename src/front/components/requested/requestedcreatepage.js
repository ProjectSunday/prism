'use strict';

var React = require('react');

var RequestedForm 		= require('./requestedform');
var RequestedActions 	= require('../../actions/requestedactions');
var RequestedStore		= require('../../stores/requestedclassesstore');

module.exports = React.createClass({
	getInitialState: function () {
		return { 
			request: { name: '' }
		}
	},
	updateRequest: function (event) {
		var name = event.target.name;
		var value = event.target.value;
		this.state.request[name] = value;
		return this.setState({ request: this.state.request });
	},
	saveRequest: function (event) {
		event.preventDefault();

		RequestedActions.createRequest(this.state.request);

	},
	render: function () {
		return (
			<div>
				<RequestedForm
					request={this.state.request}
					onChange={this.updateRequest}
					onSubmit={this.saveRequest} />
			</div>
		)
	}
});


