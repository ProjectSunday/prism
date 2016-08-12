import request from 'superagent'
import { push } from 'react-router-redux'

import { dispatch } from '~/store/store'
import prismApi from './prismapi'
import { sendMutation } from './prismapi'


export * as MeetupAuthentication from './meetupauthentication'

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

export const cancelLogin = () => {
	dispatch({
		type: 'AUTH_LOGIN_CANCEL'
	})
}

///////////////////////////////////////////////////////////////////////////////
//Profile
///////////////////////////////////////////////////////////////////////////////

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
	}
}
