export default (state, action) => {
	switch (action.type) {
		case 'SET_CATEGORIES':
			var state = { ...state }
			state.categories = action.categories
			console.log('state:', state)
			return state
		default:
			return state
	}
}