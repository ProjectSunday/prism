export default (state, action) => {
	switch (action.type) {
		case 'CREATE_REQUESTED_CLASS_SUCCESS':
			var state = { ...state }
			var rc = state.requestedClasses.slice(0)
			rc.push(action.requestedClass)
			state.requestedClasses = rc
			return state
		case 'SET_REQUESTED_CLASSES':
			var s = { ...state }
			s.requestedClasses = action.requestedClasses
			return s
		default:
			return state
	}
}