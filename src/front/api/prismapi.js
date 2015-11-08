
var id = 1;

module.exports = {
	saveRequest: function (request) {
		var date = new Date();

		request.id = id++;
		request.saved = new Date();

		return request;
	}
}