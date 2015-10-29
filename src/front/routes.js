var React 	= require('react');
var Router 	= require('react-router');

var DefaultRoute 	= Router.DefaultRoute;
var Route 			= Router.Route;

module.exports = (
	<Route name='app' path='/' handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homepage')} />
		<Route name='about' path='about' handler={require('./components/about/aboutpage')} />
	</Route>
)

