import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory } from 'react-router'
import routes from './routes'

import { syncHistoryWithStore } from 'react-router-redux'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import 'react-bootstrap'

import './assets'

// import store from './store'

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

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('main')
)