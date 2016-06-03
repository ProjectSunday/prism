import { dispatch } from '~/store/store'
import prismApi from '~/actions/prismapi'


var intervalId

export const start = () => {   //rename authenticate

	var popup = createPopup();

	intervalId = setInterval(() => {
		console.log('trying...')
		var token
		try {

			var href = popup.location.href
			// console.log('blah', popup.location.href)
			token = href.split('#')[1].split('&')[0].split('=')[1]

		} catch (err) {}

		if (token) {
			console.log('token', token)
			clearInterval(intervalId)
			popup.close()
			getProfile(token)
		}

		if (popup.closed) {
			clearInterval(intervalId)
		}

	}, 10)

}

const getProfile = (token) => {
	prismApi(`
		query {
			user (token: "${token}") {
				_id,
				meetup {
					id,
					name
				}
			}
		}
	`, (user) => {
		console.log('user', user)
	})
}


const createPopup = () => {
	// var url = `https://secure.meetup.com/authorize/?oauth_token=agv0hvfqpoq451holbd2vqrf9j`
	var url = 'https://secure.meetup.com/oauth2/authorize?client_id=sgeirri963sprv1a1vh3r8cp3o&response_type=token&redirect_uri=http://localhost:7000/authentication'
	var settings = `scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=500,height=400,top=50,left=100`;
	return window.open(url, '', settings)
}


