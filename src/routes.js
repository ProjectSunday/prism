import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Root, Home, Requested } from './components'

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Home} />
		<Route path="/requested" component={Requested} />
	</Route>
)



// var routes = (
// 	<Route path="/" handler={require('./components/app')}>
// 		<DefaultRoute handler={require('./components/home/homepage')} />
// 		<Route path="requested" handler={require('./components/requested/requestedpage')} />
// 		<Route path="requested-create" handler={require('./components/requested/requestedcreatepage')} />
// 		<Route path="about" handler={require('./components/about/aboutpage')} />
// 	</Route>
// );