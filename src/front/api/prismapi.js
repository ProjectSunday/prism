
module.exports = {
	saveRequest: function (request) {
		var date = new Date();
		request.saved = new Date();

		return request;
	}
}