'use strict';

var React 	= require('react');
var Router 	= require('react-router');

var RequestedForm 		= require('./requestedform');
var RequestedActions 	= require('../../actions/requestedactions');
var RequestedStore		= require('../../stores/requestedclassesstore');
var CategoryStore 		= require('../../stores/category.store');

module.exports = React.createClass({
	mixins: [
		Router.Navigation
	],
	getInitialState: function () {
		return { 
			request: { name: '', imageUrl: 'images/class/music.png' },
			categories: []
		}
	},
	componentWillMount: function () {
		this.setState({ categories: CategoryStore.getAll() })
	},

	updateRequest: function (event) {
		var name = event.target.name;
		var value = event.target.value;
		this.state.request[name] = value;

		red(this.state.request);
		return this.setState({ request: this.state.request });
	},
	saveRequest: function (event) {
		event.preventDefault();

		RequestedActions.createRequest(this.state.request);
		this.transitionTo('/requested');
	},
	render: function () {
		return (
			<div>
				<RequestedForm
					request={this.state.request}
					categories={this.state.categories}
					onChange={this.updateRequest}
					onSubmit={this.saveRequest} />
			</div>
		)
	}
});


