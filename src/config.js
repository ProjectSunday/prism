import { applyMiddleware, combineReducers, compose, createStore } 	from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } 	from 'react-router-redux'
import { browserHistory } 											from 'react-router'

import main 			from './store/mainReducer'
import initialState 	from './store/initialState'

export default function () {

	var m = routerMiddleware(browserHistory)
	var r = combineReducers({
		main,
		routing: routerReducer
	})
	var c = compose(
		applyMiddleware(m),
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	var store = createStore(r, initialState, c)
	
	var history = syncHistoryWithStore(browserHistory, store)

	return { history, store }
}