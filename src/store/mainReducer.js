
export default (state = {}, action) => {
	switch (action.type) {
		case 'TESTING':
			var state = { ...state }
			state.testing = 'testing'
			///.... so more things to new state
			return state
		default:
			return state
	}
}
