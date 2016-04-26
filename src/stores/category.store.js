'use strict';

var _ 				= require('lodash');
var EventEmitter	= require('events').EventEmitter;
var assign 			= require('object-assign');

var Dispather 		= require('../dispatcher/prismdispatcher');
var ActionTypes 	= require('../constants/actiontypes');

var CHANGE_EVENT = 'change';

var _categories = [];

var CategoryStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},
	getAll: function () {
		return _categories;
	},
	getCategoryById: function (id) {
		return _.find(_categories, { _id: id });
	}
});

Dispather.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.GET_ALL_CATEGORIES:
			trace('store', action.categories);
			_categories = action.categories
			CategoryStore.emitChange();
			break;
		default:
			break;
	}
});

module.exports = CategoryStore;