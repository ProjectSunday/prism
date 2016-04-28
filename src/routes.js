import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Root, Home, Requested } from './components'

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Home} />
		<Route path="/requested" component={Requested} />
	</Route>
)