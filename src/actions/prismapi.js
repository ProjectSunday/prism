import request from 'superagent'
import { dispatch } from '../store'

const PRISMAPI_URL = 'http://localhost:9000/graphql'

export default (graph, success, fail) => {

	success = success || ((result) => {
		console.error('PrismApiStandardSuccess result:', result)
	})

	fail = fail || ((error) => {
		console.error('PrismApiStandardError error:', error)
	})

	request.post(PRISMAPI_URL)
		.set({ 'Content-Type': 'application/graphql' })
		.send(graph)
		.end((err, res) => {
			if (err) {
				fail(err)
			} else {
				success(res.body.data)
			}
		})

}

