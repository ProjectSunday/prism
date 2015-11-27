'use strict';

var React = require('react');

var CategoryDropdown = require('../category/categorydropdown');

// var CategoryAction 		= require('../../actions/category.action');
// var CategoryStore 		= require('../../stores/category.store');

module.exports = React.createClass({
	// getInitialState: function () {
	// 	return {
	// 		categories: [],
	// 	}
	// },

	// onChange: function (e) {
	// },

	render: function () {
		var request = this.props.request;
		return (
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" value={request.name} onChange={this.props.onChange} />

				<br />
				
				<CategoryDropdown
					categories={this.props.categories}
					onChange={this.props.onChange}
					/>
				<input type="submit" value="Submit" className="btn btn-default" onClick={this.props.onSubmit} />

			</form>
		)
	}
});


