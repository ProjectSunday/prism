'use strict';

var Dispatcher 	= require('../dispatcher/prismdispatcher');
var PrismApi 	= require('../api/prismapi');
var ActionTypes	= require('../constants/actiontypes.js')  

module.exports = {
	createRequest: function (request) {
		var newRequest = PrismApi.saveRequest(request);

		Dispatcher.dispath({
			actionType: ActionTypes.CREATE_REQUEST,
			request: newRequest
		});

	}
};