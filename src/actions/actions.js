import request from 'superagent'
import { push } from 'react-router-redux'

import { dispatch, store } from '~/store/store'
import prismApi from './prismapi'
import { sendMutation } from './prismapi'


// export * as MeetupAuthentication from './meetupauthentication'

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

export const navigate = (path) => {
	dispatch(push(path))
}

export const showNotification = (notification) => {
	dispatch({ type: 'SHOW_NOTIFICATION', notification })
}

export const hideNotification = (notification) => {
	dispatch({ type: 'HIDE_NOTIFICATION', notification })
}

export const createRequestedClass = (requested) => {
	showNotification({
		message: 'Creating new request...',
		type: 'progress'
	})
	prismApi(`
		mutation {
			createRequestedClass (name: "${requested.name}", category: "${requested.category}") {
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
		}
	`, (result) => {
		console.log('createRequestedClass result:', result)
		dispatch({
			type: 'CREATE_REQUESTED_CLASS_SUCCESS',
			requestedClass: result.createRequestedClass
		})
		hideNotification({
			message: 'New request created',
			type: 'success'
		})
	})
}

export const getCategories = () => {
	prismApi(`
		query {
			categories {
				_id,
				name,
				imageName
			}
		}
	`, (result) => {
		// console.log('categoroes: ', result.categories)
		dispatch({
			type: 'SET_CATEGORIES',
			categories: result.categories
		})
	})
}

export const getRequestedClasses = () => {
	prismApi(`
		query {
			requestedClasses {
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
		}
	`, (result) => {
		console.log('result: ', result)
		dispatch({
			type: 'SET_REQUESTED_CLASSES',
			requestedClasses: result.requestedClasses
		})
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
//Profile
////////////////////////////////////////////////////////////////////////////////////////////////////

export const Profile = {
	get: async (token) => {
		var data = await sendMutation(`	
			authenticateViaMeetup (token: "${token}") {
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

		dispatch({
			type: 'AUTH_LOGIN_SUCCESS',
			user: data.authenticateViaMeetup
		})
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
