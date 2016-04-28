import { createStore, combineReducers, compose } from 'redux'
import { routerReducer } from 'react-router-redux'

import rootReducer from './rootReducer'

var initialState = {

}

var reducers = combineReducers({
	rootReducer,
	routing: routerReducer
})

export default function configureStore() {
	return createStore(
		reducers,
		initialState, 
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
}