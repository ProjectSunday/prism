var express = require('express')

var request = require('superagent')

var app = express()

var meetup = {

	client_id: 'sgeirri963sprv1a1vh3r8cp3o',
	client_secret: '72ifhdnu3s76fk87tg60tqb8m9',
	redirect_uri: 'http://localhost:7000/authentication',

	code: '',
	access_token: '',
	refresh_token: '',
	created: ''

	// 'code': '66a7f707e4d1b436a02f5a02828d17f1',
	// 'access_token': '8c7d03c3b4b74b65cef731abd2ec1042',
	// 'refresh_token': '66437a5fedf5cd56dd7938bc87202cbc',
	// 'created': 'Wed Jun 08 2016 16:33:50 GMT-0400 (EDT)'

	//refresh token expires in 1 hour, 3600 seconds,
	//code remains the same after 1 hour
	//refresh token remains the same after 1 hour
	// new access token can still be obtain


	// 'code': '66a7f707e4d1b436a02f5a02828d17f1',
	// 'access_token': 'eaa52e7e5ace0af6c913ae58505b0138',
	// 'refresh_token': '66437a5fedf5cd56dd7938bc87202cbc',
	// 'created': 'Wed Jun 08 2016 17:49:16 GMT-0400 (EDT)'


}


function getMarkup() {

	if (meetup.created) {

		var now = new Date()
		var created = new Date(meetup.created)

		var diff = now.getTime() - created.getTime();

		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		diff -=  days * (1000 * 60 * 60 * 24);

		var hours = Math.floor(diff / (1000 * 60 * 60));
		diff -= hours * (1000 * 60 * 60);

		var mins = Math.floor(diff / (1000 * 60));
		diff -= mins * (1000 * 60);

		var seconds = Math.floor(diff / (1000));
		diff -= seconds * (1000);
	}



	return '<div>' +
		'timestamp:     ' + (new Date()).toString() + '<br />' +
		'code:          ' + meetup.code + '<br />' +
		'access_token:  ' + meetup.access_token + '<br />' +
		'refresh_token: ' + meetup.refresh_token + '<br />' +
		'created: ' + meetup.created + '<br />' +
		'age: ' + days + 'days ' + hours + 'h ' + mins + 'm ' + seconds + 's' + '<br />' +
	'</div>' +
	'<a href="https://secure.meetup.com/oauth2/authorize?client_id=sgeirri963sprv1a1vh3r8cp3o&response_type=code&scope=basic+profile_edit&redirect_uri=http://localhost:7000/authentication">authorize</a><br />' +
	'<a href="/access">access</a><br />' +
	'<a href="/refresh">refresh</a><br />' +
	'<a href="/self">self</a><br />'
}

app.get('/', function (req, res) {
	res.send(getMarkup())
})

app.get('/authentication', function (req, res) {
	meetup.code = req.query.code
	res.send(getMarkup())
})

app.get('/access', function (req, res) {
	var url = 'https://secure.meetup.com/oauth2/access?'+
		'client_id=' + meetup.client_id +
		'&client_secret=' + meetup.client_secret +
		'&grant_type=authorization_code' +
		'&redirect_uri=' + meetup.redirect_uri +
		'&code=' + meetup.code

	request
		.post(url)
		.set({'Content-Type': 'application/x-www-form-urlencoded'})
		.end(function (e, r) {
			meetup.access_token = r.body.access_token
			meetup.refresh_token = r.body.refresh_token
			meetup.created = new Date()
			res.send(getMarkup())
		})
})

app.get('/refresh', function (req, res) {
	var url = 'https://secure.meetup.com/oauth2/access' +
		'?client_id=' + meetup.client_id +
		'&client_secret=' + meetup.client_secret +
		'&grant_type=refresh_token' +
		'&refresh_token=' + meetup.refresh_token

	request
		.post(url)
		.set({'Content-Type': 'application/x-www-form-urlencoded'})
		.end(function (e, r) {
			meetup.access_token = r.body.access_token
			meetup.refresh_token = r.body.refresh_token
			meetup.created = new Date()
			res.send(getMarkup())
		})
})

app.get('/self', function (req, res) {
	var url = 'https://api.meetup.com/2/member/self'
	request
		.get(url)
		.set({'Authorization': 'Bearer ' + meetup.access_token })
		.end(function (e, r) {
			console.log(r.header, 'rrrrrr')

			var m = getMarkup() + '<div>' + JSON.stringify(r.body) + '</div>'
			res.send(m)
		})
})

app.listen(7000, function () {
	console.log('server online')
})



