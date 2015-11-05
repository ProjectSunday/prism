'use strict';

var React = require('react');

module.exports = React.createClass({
	render: function () {
		var request = this.props.request;
		return (
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" value={request.name} onChange={this.props.onChange} />

				<br />
				<input type="submit" value="Submit" className="btn btn-default" onClick={this.props.onSubmit} />
			</form>
		)
	}
});


