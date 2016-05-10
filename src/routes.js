import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Root, Home, Requested, About } from './components'

import { CreateRequest } from './components'

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Home} />
		<Route path="requested" component={Requested} />
		<Route path="createrequest" components={CreateRequest} />
		
		<Route path="about" component={About} />
	</Route>
)

