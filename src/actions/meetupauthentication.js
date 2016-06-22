import { dispatch } from '~/store/store'
import prismApi from '~/actions/prismapi'


var intervalId

export const start = () => {

	dispatch({ type: 'AUTH_LOGIN_START' })

	var popup = createPopup();

	intervalId = setInterval(() => {
		var token
		try {
			var href = popup.location.href
			token = href.split('#')[1].split('&')[0].split('=')[1]

		} catch (err) {}

		if (token) {
			console.log('token', token)
			clearInterval(intervalId)
			// popup.close()
			getProfile(token)
		}

		if (popup.closed) {
			clearInterval(intervalId)
		}

	}, 10)

}

const getProfile = (token) => {
	prismApi(`
		mutation {
			user: authenticateUser (token: "${token}") {
				_id,
				meetup {
					id,
					name,
					photo {
						thumb_link
					}
				}
			}
		}
	`, (r) => {
		dispatch({
			type: 'AUTH_LOGIN_SUCCESS',
			user: r.user
		})
	})
}


const createPopup = () => {
	var url = 'https://secure.meetup.com/oauth2/authorize?client_id=sgeirri963sprv1a1vh3r8cp3o&response_type=token&redirect_uri=http://localhost:7000/authentication'
	var settings = `scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=500,height=400,top=50,left=100`;
	return window.open(url, '', settings)
}


