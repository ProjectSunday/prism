import { createStore, compose } from 'redux'

import rootReducer from './rootReducer'

var initialState = {

}

export default createStore(
	rootReducer, 
	initialState, 
	window.devToolsExtension ? window.devToolsExtension() : undefined
)