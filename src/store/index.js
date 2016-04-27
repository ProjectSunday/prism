import { createStore } from 'redux'

import rootReducer from './rootReducer'

var initialState = {

}

export default createStore(rootReducer, initialState)