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
				id,
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

