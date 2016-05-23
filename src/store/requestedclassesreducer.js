

export default (state, action) => {
	switch (action.type) {
		case 'CREATE_REQUESTED_CLASS_SUCCESS':
			var state = { ...state }
			var rc = state.requestedClasses.slice(0)
			action.requestedClass.categoryId = 1000
			rc.push(action.requestedClass)
			state.requestedClasses = rc
			return state
		default:
			return state
	}
}