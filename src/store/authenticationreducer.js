export default (state, action) => {
	switch (action.type) {
		case 'AUTH_LOGIN_START':
			var state = { ...state }
			var a = { ...state.authentication }
			a.logingIn = true
			state.authentication = a
			return state
		case 'AUTH_LOGIN_SUCCESS':
			var state = { ...state }
			var a = { ...state.authentication }
			a.logingIn = false
			a.user = action.user
			state.authentication = a
			return state
		default:
			return state
	}
}