$ = jQuery = require('jquery');

var React 		= require('react');



var ReactDOM 	= require('react-dom');

require('./components/debug/reloadtimer');

// var HomePage = require('./components/homepage');

var Router = require('react-router');
var routes = require('./routes');


Router.run(routes, function (Handler) {
	React.render(<Handler />, document.getElementById('app'));
})


