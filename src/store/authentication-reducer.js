export default (state = {}, action) => {
	switch (action.type) {
		case 'AUTH_LOGIN_START':
			return Object.assign({}, state, { logingIn: true })
		case 'AUTH_LOGIN_CANCEL':
			return Object.assign({}, state, { logingIn: false })
		case 'AUTH_LOGIN_SUCCESS':
			return Object.assign({}, state, {
				logingIn: false,
				user: action.user
			})
		default:
			return state
	}
}