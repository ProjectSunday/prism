export const start = () => {
	// console.log('yoooo')
	createPopup()
}


const createPopup = () => {
	// var url = `https://secure.meetup.com/authorize/?oauth_token=agv0hvfqpoq451holbd2vqrf9j`

	var url = 'https://secure.meetup.com/oauth2/authorize?client_id=sgeirri963sprv1a1vh3r8cp3o&response_type=token&redirect_uri=http://localhost:7000/authentication'

	var settings = `scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=500,height=400,top=50,left=100`;
	
	var popup = window.open(url, 'blah', settings)



	// setInterval(() => {
	// 	// console.log('popup.location', popup.location)

	// 	console.log('blah', popup)
	// }, 5000);


	setInterval(() => {
		console.log('trying....')
		try {
			console.log('blah', popup.location.href)
		} catch (err) {}
	}, 1000)

}
/* istanbul ignore next */


///`width=${width},height=${height},top=${top},left=${left}`;