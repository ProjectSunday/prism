export default (state, action) => {
	switch (action.type) {
		case 'SHOW_NOTIFICATION':
			var s = { ...state }
			s.notification = { ...action.notification, show: true }
			return s
		case 'HIDE_NOTIFICATION':
			var s = { ...state }
			s.notification = { ...s.notification, show: false }
			return s
		default:
			return state
	}
}