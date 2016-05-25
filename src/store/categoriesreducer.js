export default (state, action) => {
	switch (action.type) {
		case 'SET_CATEGORIES':
			var s = { ...state }
			s.categories = action.categories
			// s.requestedClass = state.requestedClasses.slice(0)
			// s.upcomingClasses = state.upcomingClasses.slice(0)
			// console.log('state:', s)
			return s
		default:
			return state
	}
}