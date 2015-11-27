'use strict';

var React = require('react');

// var CategoryAction 		= require('../../actions/category.action');
// var CategoryStore 		= require('../../stores/category.store');

module.exports = React.createClass({
	// getInitialState: function () {
	// 	return {
	// 		categories: []
	// 	}
	// },
	// componentWillMount: function () {
	// 	CategoryAction.getAll();

	// 	var self = this;
	// 	CategoryStore.on('change', function () {
	// 		self.setState({ categories: CategoryStore.getAll() });
	// 	});
	// },
	render: function () {

		var options = [];
		var categories = this.props.categories;
		for (var i in categories) {
			options.push(
				<option key={i} value={categories[i]._id}>{categories[i].name}</option>
			);
		}

		return (
	        <div className="form-group">
	            <label htmlFor="requestCategory">Category:</label>
	            <select className="form-control" name="requestCategory" onChange={this.props.onChange}>
	            	{options}
	            </select>
	        </div>
		)
	}
});