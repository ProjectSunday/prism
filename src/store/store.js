import { applyMiddleware, combineReducers, compose, createStore } 	from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } 	from 'react-router-redux'
import { browserHistory } 											from 'react-router'

import app 				from './appReducer'
import initialState 	from './initialState'

var r = combineReducers({
	app,
	routing: routerReducer
})

var m = routerMiddleware(browserHistory)
var c = compose(
	applyMiddleware(m),
	window.devToolsExtension ? window.devToolsExtension() : undefined
)

export const store = createStore(r, initialState, c)

export const history = syncHistoryWithStore(browserHistory, store)

export const dispatch = store.dispatch