'use strict';

var React 	= require('react');
var Router 	= require('react-router');

var RequestedForm 		= require('./requestedform');

var RequestedActions 	= require('../../actions/requestedactions');
var CategoryAction 		= require('../../actions/category.action');

var RequestedStore		= require('../../stores/requestedclassesstore');
var CategoryStore 		= require('../../stores/category.store');

module.exports = React.createClass({
	mixins: [
		Router.Navigation
	],
	getInitialState: function () {
		return { 
			request: { 
				name: '', 
				imageUrl: 'images/class/music.png', 
				category: null
			},
			categories: []
			// selectedCategory: null
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
		this.state.request[name] = value;

		red(this.state.request);
		return this.setState({ request: this.state.request });
	},
	saveRequest: function (event) {
		event.preventDefault();

		RequestedActions.createRequest(this.state.request);
		this.transitionTo('/requested');
	},
	onCategoryChange: function (e) {
		// trace(e.target.value);
		var request = this.state.request;

		request.category = e.target.value;

		this.setState({ request: request });
		trace('request', request);
	},
	render: function () {
		return (
			<div>
				<RequestedForm
					request={this.state.request}
					categories={this.state.categories}
					onChange={this.updateRequest}
					onSubmit={this.saveRequest}
					onCategoryChange={this.onCategoryChange} 
					/>
			</div>
		)
	}
});


