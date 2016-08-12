export default (state = {}, action) => {
	switch (action.type) {
		case 'AUTH_SHOW_SPINNER': 
			return Object.assign({}, state, { showSpinner: action.value })
		case 'AUTH_LOGIN_START':
			return Object.assign({}, state, { showSpinner: true })
		case 'AUTH_LOGIN_CANCEL':
			return Object.assign({}, state, { showSpinner: false })
		case 'AUTH_LOGIN_SUCCESS':
			return Object.assign({}, state, {
				showSpinner: false,
				user: action.user
			})
		default:
			return state
	}
}