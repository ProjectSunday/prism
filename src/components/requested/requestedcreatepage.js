'use strict';

var React 	= require('react');
var Router 	= require('react-router');

var RequestedForm 		= require('./requestedform');

var RequestedAction 	= require('../../actions/requested.action');
var CategoryAction 		= require('../../actions/category.action');

var RequestedStore		= require('../../stores/requestedclassesstore');
var CategoryStore 		= require('../../stores/category.store');

module.exports = React.createClass({
	mixins: [
		Router.Navigation
	],
	getInitialState: function () {
		return { 
			categories: [],
			request: { 
				name: '',
				categoryId: null
			}
		}
	},
	componentWillMount: function () {
		CategoryAction.getAll();
		var self = this;
		CategoryStore.on('change', function () {
			var categories = CategoryStore.getAll().slice(0);				//slicing to prevent pollution of store data
			categories.unshift({ _id: '', name: '(Select a category)' });   //_id: '' for falsy check laster on
			self.setState({ categories: categories });
		});
	},
	updateRequest: function (event) {
		var name = event.target.name;
		var value = event.target.value;

		var request = this.state.request;

		request[name] = value;

		red(this.state.request);
		return this.setState({ request: request });
	},
	saveRequest: function (event) {
		event.preventDefault();

		RequestedAction.createRequest(this.state.request);
		this.transitionTo('/requested');
	},
	render: function () {
		return (
			<div>
				<RequestedForm
					request={this.state.request}
					categories={this.state.categories}
					onChange={this.updateRequest}
					onSubmit={this.saveRequest}
					/>
			</div>
		)
	}
});


