'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
		return (
			<div className="container text-center well well-lg">
			    <div className="col-md-4 col-md-offset-2 col-xs-6">
			        <h4>Don't see your class?</h4>
			        <Link to="/requested-create" className="btn btn-lg btn-primary">Request it here</Link>
			    </div>
			    <div className="col-md-4 col-sm-5 col-xs-6">
			        <h4>See a class you can teach?</h4>
			        <Link to="/about" className="btn btn-lg btn-primary">Sign up to teach</Link>
			    </div>
			</div>
		)
	}
});

