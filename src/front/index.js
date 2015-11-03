$ = jQuery = require('jquery');



(function () {
	'use strict';

	require('bootstrap');

	var React 	= require('react');
	var Router 	= require('react-router');

	var Route 			= Router.Route;
	var DefaultRoute 	= Router.DefaultRoute;

	var routes = (
		<Route path="/" handler={require('./components/app')}>
			<DefaultRoute handler={require('./components/home/homepage')} />
			<Route path="requested" handler={require('./components/requested/requestedpage')} />
			<Route path="requested-create" handler={require('./components/requested/requestedcreatepage')} />
			<Route path="about" handler={require('./components/about/aboutpage')} />
		</Route>
	);

	Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(<Handler />, document.getElementById('app'));
	});
	
})();

