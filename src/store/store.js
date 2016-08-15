import { applyMiddleware, combineReducers, compose, createStore } 	from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } 	from 'react-router-redux'
import { browserHistory } 											from 'react-router'

import * as reducers from './reducers'

var r = combineReducers({
	routing: routerReducer,
	...reducers
})

var m = routerMiddleware(browserHistory)
var c = compose(
	applyMiddleware(m),
	window.devToolsExtension ? window.devToolsExtension() : null
)

export const store = createStore(r, {}, c)

export const history = syncHistoryWithStore(browserHistory, store)

export const dispatch = store.dispatch