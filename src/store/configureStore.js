import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import main from './mainReducer'

import initialState from './initialState'

var reducers = combineReducers({
	main,
	routing: routerReducer
})

export default function configureStore() {
	return createStore(
		reducers,
		initialState, 
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
}