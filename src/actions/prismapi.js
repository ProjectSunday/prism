import request from 'superagent'
import { dispatch } from '../store'

const PRISMAPI_URL = 'http://localhost:9000/graphql'

export default (graph) => {
	return new Promise((resolve, reject) => {
		request.post(PRISMAPI_URL)
			.set({ 'Content-Type': 'application/graphql' })
			.send(graph)
			.end((err, res) => {
				if (err) {
					// console.log('PrismAPI error: ', err)
					reject(err)
				} else {
					// console.log('PrismAPI resolve: ', res.body.data)
					resolve(res.body.data)
				}
			})
	})
}

