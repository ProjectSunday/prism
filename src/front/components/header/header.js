var React = require('react');

var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<div>header</div>
				<Link to="app">Home</Link>
				<br />
				<Link to="about">About</Link>
			</div>
		)
	}
});