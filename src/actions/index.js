import request from 'superagent'
import { push } from 'react-router-redux'

import { dispatch } from '../store'
import PrismAPI from './prismapi'

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
	PrismAPI(`
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
	`).then(result => {
		console.log('createRequestedClass result:', result)
		dispatch({
			type: 'CREATE_REQUESTED_CLASS_SUCCESS',
			requestedClass: result.createRequestedClass
		})
		hideNotification({
			message: 'New request created',
			type: 'success'
		})
	}, error => {
		console.log('createRequestedClass error:', error)
	})
}

export const getCategories = () => {
	PrismAPI(`
		query {
			categories {
				_id,
				name,
				imageName
			}
		}
	`).then(result => {
		// console.log('categoroes: ', result.categories)
		dispatch({
			type: 'SET_CATEGORIES',
			categories: result.categories
		})
	}, error => {

	})
}

export const getRequestedClasses = () => {
	PrismAPI(`
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
	`).then(result => {
		// console.log('result: ', result)
		dispatch({
			type: 'SET_REQUESTED_CLASSES',
			requestedClasses: result.requestedClasses
		})
	}, error => {

	})
}

