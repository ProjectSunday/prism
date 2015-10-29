'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./header/header');

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<Header />
				<RouteHandler />
			</div>
		)
	}
});