$ = jQuery = require('jquery');

var React 		= require('react');
var Router = require('react-router');
var routes = require('./routes');


var reloadTimer = require('./components/debug/reloadtimer');





// var ReactDOM 	= require('react-dom');


(function () {
	'use strict';
	// require('./components/debug/reloadtimer');

	reloadTimer(document);

	Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(<Handler />, document.getElementById('app'));
	});
	
})();

// var HomePage = require('./components/homepage');



