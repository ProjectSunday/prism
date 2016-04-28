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

///////////////////////////////////////////////////////////////////
// Assets - all assets, images, font, etc
///////////////////////////////////////////////////////////////////
import './assets'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const mount = document.getElementById('mount')

window.DISPATCH = store.dispatch  //totally a hai-only thing, I want dispatch everywhere

render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>,
	mount
)