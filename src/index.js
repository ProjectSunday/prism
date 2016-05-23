import React 			from 'react'
import { render } 		from 'react-dom'
import { Router } 		from 'react-router'
import { Provider } 	from 'react-redux'

import { store, history } from './store'
import routes from './routes'

import { fetchData, createRequestedClass } from './actions'


///////////////////////////////////////////////////////////////////
// Third Party
///////////////////////////////////////////////////////////////////
import 'react-bootstrap'
// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/bootswatch/flatly.min.css'


///////////////////////////////////////////////////////////////////
// Others
///////////////////////////////////////////////////////////////////
import './utils'
import './assets/images/favicon.ico'
import * as images from './assets/images'


///////////////////////////////////////////////////////////////////
// Globals
///////////////////////////////////////////////////////////////////
window.IMAGES = images


// fetchData()

// createRequestedClass({ name: 'test my23.657'})

///////////////////////////////////////////////////////////////////
// Mount
///////////////////////////////////////////////////////////////////
render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>,
	document.getElementById('mount')
)