export const start = () => {
	// console.log('yoooo')
	createPopup()
}


const createPopup = () => {
	var url = `https://secure.meetup.com/authorize/?oauth_token=agv0hvfqpoq451holbd2vqrf9j`

	var settings = `scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=300,height=200,top=50,left=100`;

	window.open(url, 'name????', settings)

}
/* istanbul ignore next */


///`width=${width},height=${height},top=${top},left=${left}`;