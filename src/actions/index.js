import fetch from 'isomorphic-fetch'


export const fetchData = () => {


	// return (dispatch) => {

		fetch('http://www.reddit.com/r/news.json').then(res => {
			return res.json()
		}).then(data => {
			
			console.log('data', data)

			// dispatch({
			// 	type: 'FETCHDATA_SUCCESS',
			// 	data: data
			// })

			
		})

	// }

}