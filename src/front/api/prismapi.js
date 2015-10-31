
module.exports = {
	saveRequest: function (request) {
		var date = new Date();
		request.created = new Date();

		return request;
	}
}