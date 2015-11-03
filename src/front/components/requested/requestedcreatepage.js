'use strict';

var React = require('react');

var RequestedForm = require('./requestedform');

module.exports = React.createClass({
	getInitialState: function () {
		return { 
			request: { name: '' }
		}
	},
	onChange: function (event) {
		var name = event.target.name;
		var value = event.target.value;
		this.state.request[name] = value;
		return this.setState({ request: this.state.request });
	},
	render: function () {
		return (
			<div>
				<RequestedForm
					request={this.state.request}
					onChange={this.onChange} />
			</div>
		)
	}
});


