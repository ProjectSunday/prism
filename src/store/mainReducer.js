import RequestedClassesReducer 	from './requestedclassesreducer'
import CategoriesReducer 		from './categoriesreducer'
import NotificationReducer		from './notificationreducer'

export default (state = {}, action) => {
	switch (action.type) {
		case 'TESTING':
			var state = { ...state }
			state.testing = 'testing'
			///.... so more things to new state
			return state
		case 'SHOW_NOTIFICATION':
		case 'HIDE_NOTIFICATION':
			return NotificationReducer(state, action)

		case 'SET_CATEGORIES':
			return CategoriesReducer(state,action)
			
		case 'CREATE_REQUESTED_CLASS_SUCCESS':
		case 'SET_REQUESTED_CLASSES':
			return RequestedClassesReducer(state, action)
		default:
			return state
	}
}


