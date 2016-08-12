import request from 'superagent'
import { dispatch } from '~/store/store'

const PRISMAPI_URL = 'http://localhost:9000/graphql'

export const sendMutation = async (graph) => {
	return new Promise((resolve, reject) => {
		request.post(PRISMAPI_URL)
			.set({ 'Content-Type': 'application/graphql' })
			.send(`mutation { ${graph} }`)
			.end((err, res) => {
				if (err) {
					reject(err)
				} else {
					resolve(res.body.data)
				}
			})
	})
}

export default (graph, success, fail) => {

	success = success || ((result) => {
		console.error('PrismApiStandardSuccess result:', result)
	})

	fail = fail || ((error) => {
		console.error('PrismApiStandardError error:', JSON.stringify(error))
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

