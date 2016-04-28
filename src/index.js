import React from 'react'

import { Route } from 'react-router'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import 'react-bootstrap'

import './assets'

import store from './store'

// var Router 		= require('react-router');
// var ReactDOM 	= require('react-dom');

// var Route 			= Router.Route;
// var DefaultRoute 	= Router.DefaultRoute;

// var routes = (
// 	<Route path="/" handler={require('./components/app')}>
// 		<DefaultRoute handler={require('./components/home/homepage')} />
// 		<Route path="requested" handler={require('./components/requested/requestedpage')} />
// 		<Route path="requested-create" handler={require('./components/requested/requestedcreatepage')} />
// 		<Route path="about" handler={require('./components/about/aboutpage')} />
// 	</Route>
// );

// Router.run(routes, Router.HistoryLocation, function (Handler) {
// 	render(<Handler />, document.getElementById('app'));
// });


render(
	<Provider store={store}>
		<div>44444</div>
	</Provider>,
	document.getElementById('main')
)