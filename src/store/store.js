import { applyMiddleware, combineReducers, compose, createStore } 	from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } 	from 'react-router-redux'
import { browserHistory } 											from 'react-router'

import app 				from './appReducer'
import initialState 	from './initialState'
// import authentication 	from './authentication-reducer'

import * as reducers from './reducers'

var r = combineReducers({
	routing: routerReducer,
	app,
	...reducers
})

var m = routerMiddleware(browserHistory)
var c = compose(
	applyMiddleware(m),
	window.devToolsExtension ? window.devToolsExtension() : undefined
)

export const store = createStore(r, initialState, c)

export const history = syncHistoryWithStore(browserHistory, store)

export const dispatch = store.dispatch