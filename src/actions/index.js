import request from 'superagent'
import { dispatch } from '../store'

export const fetchData = () => {


	// return (dispatch) => {


		var PRISMAPI_URL = 'http://localhost:9000/graphql'

		// var o = {
		// 	url: PRISMAPI_URL,
		// 	headers: {
		// 		'Content-Type': 'application/graphql'
		// 	}
		// }
		// rest(o, (err, res, body) => {
		// 	console.log('request', err, res, body)
		// })
			

		var query = `
			query {
				categories {
					id
					name
				}
			}
		`
		request.post(PRISMAPI_URL)
			.set({ 'Content-Type': 'application/graphql' })
			.send(query)
			.end((req, res) => {

				console.log(res.body.data)
				// debugger;
			})

	// }

}