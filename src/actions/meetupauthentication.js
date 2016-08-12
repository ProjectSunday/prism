// import { dispatch } from '~/store/store'
// import { sendMutation } from '~/actions/prismapi'
// import { cancelLogin, Profile } from './actions'

// var intervalId

// export const start = () => {

// 	dispatch({ type: 'AUTH_LOGIN_START' })

// 	var popup = createPopup();

// 	intervalId = setInterval(() => {
// 		var token
// 		try {
// 			var href = popup.location.href
// 			token = href.split('#')[1].split('&')[0].split('=')[1]
// 		} catch (err) {}

// 		if (token) {
// 			// console.log('token', token)
// 			clearInterval(intervalId)
// 			popup.close()
// 			Profile.get(token)
// 		}

// 		if (popup.closed) {
// 			clearInterval(intervalId)
// 			cancelLogin()
// 		}

// 	}, 10)

// }

// const createPopup = () => {
// 	var width = 700
// 	var height = 700

// 	var left = (screen.width - width) / 2
// 	var top = (screen.height - height) / 2

// 	var url = 'https://secure.meetup.com/oauth2/authorize?client_id=sgeirri963sprv1a1vh3r8cp3o&response_type=token&redirect_uri=http://localhost:7000/authentication'
// 	var settings = `scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=${width},height=${height},top=${top},left=${left}`;
// 	return window.open(url, '', settings)
// }


