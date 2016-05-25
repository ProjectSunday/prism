import request from 'superagent'
import { push } from 'react-router-redux'

import { dispatch } from '../store'
import PrismAPI from './prismapi'

export const navigate = (path) => {
	dispatch(push(path))
}

export const createRequestedClass = (requested) => {
	PrismAPI(`
		mutation {
			createRequestedClass (name: "${requested.name}") {
				_id,
				name
			}
		}
	`).then(result => {
		dispatch({
			type: 'CREATE_REQUESTED_CLASS_SUCCESS',
			requestedClass: result.createRequestedClass
		})
	}, error => {

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