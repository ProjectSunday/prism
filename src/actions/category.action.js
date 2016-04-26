'use strict';

var Dispatcher 	= require('../dispatcher/prismdispatcher');
var PrismApi 	= require('../api/prismapi');
var ActionTypes	= require('../constants/actiontypes.js')  

module.exports = {
	getAll: function () {
		PrismApi.Category.getAll()
			.then(function (categories, a, b, c) {
				Dispatcher.dispatch({
					actionType: ActionTypes.GET_ALL_CATEGORIES,
					categories: categories
				});
			});
	}
	

};

