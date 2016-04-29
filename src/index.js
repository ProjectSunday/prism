import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory } from 'react-router'
import routes from './routes'

import { syncHistoryWithStore } from 'react-router-redux'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

///////////////////////////////////////////////////////////////////
// Third Party
///////////////////////////////////////////////////////////////////
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

///////////////////////////////////////////////////////////////////
// Others
///////////////////////////////////////////////////////////////////
import './utils'
import './assets/images/favicon.ico'
import * as images from './assets/images'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const mount = document.getElementById('mount')

///////////////////////////////////////////////////////////////////
// Globals
///////////////////////////////////////////////////////////////////
window.DISPATCH = store.dispatch  //totally a hai-only thing, I want dispatch everywhere
window.IMAGES = images

render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>,
	mount
)