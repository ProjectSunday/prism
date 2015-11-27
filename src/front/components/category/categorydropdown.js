'use strict';

var React = require('react');

var CategoryAction 	= require('../../actions/category.action');
var CategoryStore 	= require('../../stores/category.store');

module.exports = React.createClass({
	onChange: function (e) {
		trace('onchange', e);
	},
	getInitialState: function () {
		return {
			categories: []
		}
	},
	componentWillMount: function () {
		// trace('calling categoryaction.getall');
		CategoryAction.getAll();
		// trace('done get all');

		var self = this;
		CategoryStore.on('change', function () {
			self.setState({ categories: CategoryStore.getAll() });
		});
	},
	render: function () {
		var options = [];

		trace('222', this.state.categories);
		var categories = this.state.categories;
		for (var i in categories) {
			options.push(
				<option key={i}>{categories[i].name}</option>
			);
		}

		return (
	        <div className="form-group">
	            <label htmlFor="requestCategory">Category:</label>
	            <select className="form-control" name="requestCategory" onChange={this.onChange}>
	            	{options}
	            </select>
	        </div>
		)
	}
});