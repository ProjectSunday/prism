'use strict';

var Dispatcher 	= require('../dispatcher/prismdispatcher');
var PrismApi 	= require('../api/prismapi');
var ActionTypes	= require('../constants/actiontypes.js')  

module.exports = {
	createRequest: function (request) {
		var newRequest = PrismApi.saveRequest(request);

		trace(newRequest);
		trace(newRequest);
		trace(newRequest);
		trace(newRequest);
		red(newRequest);
		trace(newRequest);
		trace(newRequest);
		trace(newRequest);




		// Dispatcher.dispath({
		// 	actionType: ActionTypes.CREATE_REQUEST,
		// 	request: newRequest
		// });

	}
};

