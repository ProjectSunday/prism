import RequestedClassesReducer 	from './requestedclassesreducer'
import CategoriesReducer 		from './categoriesreducer'

export default (state = {}, action) => {
	switch (action.type) {
		case 'TESTING':
			var state = { ...state }
			state.testing = 'testing'
			///.... so more things to new state
			return state

		case 'SET_CATEGORIES':
			return CategoriesReducer(state,action)
		case 'CREATE_REQUESTED_CLASS_SUCCESS':
			return RequestedClassesReducer(state, action)
		default:
			return state
	}
}


