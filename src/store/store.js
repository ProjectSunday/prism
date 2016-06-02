import { applyMiddleware, combineReducers, compose, createStore } 	from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } 	from 'react-router-redux'
import { browserHistory } 											from 'react-router'

import main 			from './mainReducer'
import initialState 	from './initialState'

var Middleware = routerMiddleware(browserHistory)

var Reducers = combineReducers({
	main,
	routing: routerReducer
})

var Compose = compose(
	applyMiddleware(Middleware),
	window.devToolsExtension ? window.devToolsExtension() : undefined
)

export const store = createStore(Reducers, initialState, Compose)
	
export const history = syncHistoryWithStore(browserHistory, store)

export const dispatch = store.dispatch