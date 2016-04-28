import React from 'react'
import { Route } from 'react-router'

import Root from './components/root'
import Requested from './components/requested'

export default (
	<Route path="/" component={Root}>
		<Route path="/requested" component={Requested} />
	</Route>
)