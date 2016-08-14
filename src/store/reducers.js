////////////////////////////////////////////////////////////////////////////////////////////////////
//testing
////////////////////////////////////////////////////////////////////////////////////////////////////

export const testing = (state = {}, action) => {
	switch (action.type) {
		case 'TESTING':
			return Object.assign({}, state, { testing: 'testing '})
		default:
			return state
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//authentication
////////////////////////////////////////////////////////////////////////////////////////////////////

export const authentication = (state = {}, action) => {
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
		case 'AUTH_LOGOUT_SUCCESS':
			return Object.assign({}, state, { user: undefined, showSpinner: false })
		default:
			return state
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//category
////////////////////////////////////////////////////////////////////////////////////////////////////

var initialCategoryState = { list: [], selectedCategory: undefined }
export const category = (state = initialCategoryState, action) => {
	switch (action.type) {
		case 'CATEGORY_SET_LIST':
			return Object.assign({}, state, { list: action.list })
		case 'CATEGORY_SET_SELECTED':
			return Object.assign({}, state, { selectedCategory: action.value })
		default:
			return state
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//notification
////////////////////////////////////////////////////////////////////////////////////////////////////

export const notification = (state = {}, action) => {
	switch (action.type) {
		case 'SHOW_NOTIFICATION':
			return Object.assign({}, action.notification, { show: true })
		case 'HIDE_NOTIFICATION':
			return Object.assign({}, action.notification, { show: false })
		default:
			return state
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//requestedClass
////////////////////////////////////////////////////////////////////////////////////////////////////

var initialRequestedClass = {
	list: []
}
export const requestedClass = (state = initialRequestedClass, action) => {
	switch (action.type) {
		case 'CREATE_REQUESTED_CLASS_SUCCESS':
			var list = state.list.slice(0)
			list.push(action.requestedClass)
			return Object.assign({}, state, { list })
		case 'REQUESTEDCLASS_SET_LIST':
			return Object.assign({}, state, { list: action.list })
		default:
			return state
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//ui
////////////////////////////////////////////////////////////////////////////////////////////////////

var initialUiState = {
	// selectedCategory: undefined
}
export const ui = (state = initialUiState, action) => {
	switch (action.type) {
		// case 'UI_SET_SELECTED_CATEGORY': 
		// 	return Object.assign({}, state, { selectedCategory: action.value })
		default:
			return state
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//upcomingClass
////////////////////////////////////////////////////////////////////////////////////////////////////

var initialupcomingClassState = {
	list: [
		{ _id: 100, name: 'autoclass101', category: { _id: "57aa3e66f1559508d2779f85", name: "Automotive", imageName: "automotive" }, date: 'January 1, 1997', location: 'Downtown' },
		{ _id: 101, name: 'autoclass102', category: { _id: "57aa3e66f1559508d2779f85", name: "Automotive", imageName: "automotive" }, date: 'January 1, 1997', location: 'Downtown' },
		{ _id: 102, name: 'culclass101', category: { _id: "57aa3e66f1559508d2779f86", name: "Culinary", imageName: "culinary" }, date: 'January 1, 1997', location: 'Downtown' },
		{ _id: 103, name: 'culclass102', category: { _id: "57aa3e66f1559508d2779f86", name: "Culinary", imageName: "culinary" }, date: 'January 1, 1997', location: 'Downtown' },
		{ _id: 104, name: 'culclass103', category: { _id: "57aa3e66f1559508d2779f86", name: "Culinary", imageName: "culinary" }, date: 'January 1, 1997', location: 'Downtown' },
		{ _id: 105, name: 'diy101', category: { _id: "57aa3e66f1559508d2779f87", name: "DIY", imageName: "diy" }, date: 'January 1, 1997', location: 'Downtown' },
		{ _id: 106, name: 'diy102', category: { _id: "57aa3e66f1559508d2779f87", name: "DIY", imageName: "diy" }, date: 'January 1, 1997', location: 'Downtown' },
		{ _id: 107, name: 'diy103', category: { _id: "57aa3e66f1559508d2779f87", name: "DIY", imageName: "diy" }, date: 'January 1, 1997', location: 'Downtown' }
	]
}
export const upcomingClass = (state = initialupcomingClassState, action) => {
	switch (action.type) {
		// case 'UI_SET_SELECTED_CATEGORY': 
		// 	return Object.assign({}, state, { selectedCategory: action.value })
		default:
			return state
	}
}



