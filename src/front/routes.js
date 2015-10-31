var React 	= require('react');
var Router 	= require('react-router');

var DefaultRoute 	= Router.DefaultRoute;
var Route 			= Router.Route;

module.exports = (
	<Route path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/home/homepage')} />
		<Route path="requested" handler={require('./components/requested/requestedpage')} />
		<Route path="requested/create" handler={require('./components/requested/createpage')} />
		<Route path="about" handler={require('./components/about/aboutpage')} />
	</Route>
)

