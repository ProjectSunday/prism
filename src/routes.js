import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Root, Home, Requested, About, Upcoming } from './components/components'

import { CreateRequest, Teach } from './components/components'

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Home} />
		<Route path="about" component={About} />
		<Route path="requested" component={Requested} />
		<Route path="createrequest" components={CreateRequest} />
		<Route path="teach" components={Teach} />
		<Route path="upcoming" components={Upcoming} />
	</Route>
)

