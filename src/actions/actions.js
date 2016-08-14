import request from 'superagent'
import { push } from 'react-router-redux'

import { dispatch, store } from '~/store/store'
import prismApi from './prismapi'
import { sendQuery, sendMutation } from './prismapi'


////////////////////////////////////////////////////////////////////////////////////////////////////
//Testing
////////////////////////////////////////////////////////////////////////////////////////////////////

export const testing1 = () => {
	dispatch({
		type: 'SHOW_NOTIFICATION',
		notification: {
			message: 'stuff is starting',
			type: 'progress'
		}
	})
}

export const testing2 = () => {
	dispatch({
		type: 'HIDE_NOTIFICATION',
		notification: {
			message: 'stuff is done',
			type: 'success'
		}
	})
}


////////////////////////////////////////////////////////////////////////////////////////////////////
//Authentication
////////////////////////////////////////////////////////////////////////////////////////////////////

var AUTHENTICATION_INTERVAL_ID

export const Authentication = {
	start: () => {
		dispatch({ type: 'AUTH_SHOW_SPINNER', value: true })

		var popup = createPopup();

		AUTHENTICATION_INTERVAL_ID = setInterval(() => {
			var token
			try {
				var href = popup.location.href
				token = href.split('#')[1].split('&')[0].split('=')[1]
			} catch (err) {}

			if (token) {
				// console.log('token', token)
				clearInterval(AUTHENTICATION_INTERVAL_ID)
				popup.close()
				Profile.get(token)
			}

			if (popup.closed) {
				clearInterval(AUTHENTICATION_INTERVAL_ID)
				dispatch({ type: 'AUTH_SHOW_SPINNER', value: false })
			}

		}, 10)
	}
}

function createPopup() {
	var width = 700
	var height = 700

	var left = (screen.width - width) / 2
	var top = (screen.height - height) / 2

	//todo client_id
	var url = 'https://secure.meetup.com/oauth2/authorize?client_id=sgeirri963sprv1a1vh3r8cp3o&response_type=token&redirect_uri=http://localhost:7000/authentication'
	var settings = `scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=${width},height=${height},top=${top},left=${left}`;
	return window.open(url, '', settings)
}


////////////////////////////////////////////////////////////////////////////////////////////////////
//Category
////////////////////////////////////////////////////////////////////////////////////////////////////

export const Category = {
	getList: async () => {
		var { list } = await sendQuery(`
			list: categories {
				_id,
				name,
				imageName
			}
		`)
		dispatch({ type: 'CATEGORY_SET_LIST', list })
	},
	setSelected: (id) => {
		dispatch({ type: 'CATEGORY_SET_SELECTED', value: id })
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//Navigation
////////////////////////////////////////////////////////////////////////////////////////////////////

export const Navigation = {
	go: (path) => {
		dispatch(push(path))
	}
}

export const navigate = (path) => {
	dispatch(push(path))
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//Notification
////////////////////////////////////////////////////////////////////////////////////////////////////

export const showNotification = (notification) => {
	dispatch({ type: 'SHOW_NOTIFICATION', notification })
}

export const hideNotification = (notification) => {
	dispatch({ type: 'HIDE_NOTIFICATION', notification })
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//Requested Class
////////////////////////////////////////////////////////////////////////////////////////////////////
export const RequestedClass = {
	create: async (requested) => {
		showNotification({ type: 'progress', message: 'Creating new request...' })

		var state = store.getState()

		var { requestedClass } = await sendMutation(`
			requestedClass: createRequestedClass (token: "${state.authentication.user.token}", name: "${requested.name}", categoryId: "${requested.categoryId}") {
				_id,
				name,
				category {
					_id,
					name,
					imageName
				},
				date,
				location
			}
		`)
		dispatch({ type: 'REQUESTEDCLASS_CREATE_SUCCESS', requestedClass })
			
		hideNotification({ type: 'success', message: 'New request created'}) 
	},
	getList: async () => {
		var { list } = await sendQuery(`
			list: requestedClasses {
				_id,
				name,
				category {
					_id,
					name,
					imageName
				},
				date,
				location
			}
		`)
		dispatch({ type: 'REQUESTEDCLASS_SET_LIST', list })
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//Profile
////////////////////////////////////////////////////////////////////////////////////////////////////

export const Profile = {
	get: async (token) => {
		var { user } = await sendMutation(`	
			user: authenticateViaMeetup (token: "${token}") {
				_id,
				token,
				meetup {
					token,
					member {
						id,
						name,
						photo {
							thumb_link
						}
					}
				}
			}
		`)
		dispatch({ type: 'AUTH_LOGIN_SUCCESS', user })
	},
	logout: async () => {
		dispatch({ type: 'AUTH_SHOW_SPINNER', value: true })

		var state = store.getState()

		var data = await sendMutation(`
			logoutUser (token: "${state.authentication.user.token}") { _id, status }
		`)

		var { status } = data.logoutUser
		if (status === 'LOGOUT_SUCCESS') {
			dispatch({
				type: 'AUTH_LOGOUT_SUCCESS'
			})
		} else {
			throw 'logout failture'  //todo
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//UI
////////////////////////////////////////////////////////////////////////////////////////////////////

export const UI = {
	// setSelectedCategory: (categoryId) => {
	// 	dispatch({ type: 'UI_SET_SELECTED_CATEGORY', value: categoryId })
	// }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//UpcomingClass
////////////////////////////////////////////////////////////////////////////////////////////////////

export const UpcomingClass = {
	getList: async () => {
		var { list } = await sendQuery(`
			list: upcomingClasses {
				_id,
				category {
					_id,
					name,
					imageName
				},
				event {
					name
				},
				teachers {
					meetup {
						member {
							name
						}
					}
				}			
			}
		`)
		// console.log('list', list)

		dispatch({ type: 'UPCOMINGCLASS_SET_LIST', list })
	}
	// setSelectedCategory: (categoryId) => {
	// 	dispatch({ type: 'UI_SET_SELECTED_CATEGORY', value: categoryId })
	// }
}
