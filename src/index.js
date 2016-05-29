import React 			from 'react'
import { render } 		from 'react-dom'
import { Router } 		from 'react-router'
import { Provider } 	from 'react-redux'

import { store, history } 	from './store'
import routes 				from './routes'
import { getCategories, getRequestedClasses }	from './actions/actions'

///////////////////////////////////////////////////////////////////
// Third Party
///////////////////////////////////////////////////////////////////
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './static/bootswatch/flatly.min.css'


///////////////////////////////////////////////////////////////////
// Others
///////////////////////////////////////////////////////////////////
import './utils'
import './static/images/favicon.ico'
import * as images from './static/images'
import preloadImages from './static/images/preloadimages'


///////////////////////////////////////////////////////////////////
// Globals
///////////////////////////////////////////////////////////////////
window.IMAGES = images
preloadImages()


///////////////////////////////////////////////////////////////////
// Initialization
///////////////////////////////////////////////////////////////////
getCategories()
getRequestedClasses()

///////////////////////////////////////////////////////////////////
// Mount
///////////////////////////////////////////////////////////////////
render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>,
	document.getElementById('mount')
)