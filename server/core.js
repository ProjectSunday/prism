var Q = require(NODE_MODULES + 'q');
var _ = require(NODE_MODULES + 'underscore');

global.PROMISIFY = function(workFunction) {
    return function (args) {
        return Q.Promise(function (resolve, reject, notify) {
            workFunction(args, resolve, reject, notify);
        });
    }
}

global.BASEITEM = function (initialAttributes) {
    var self = this;
    self.error = null;
    self.attributes = initialAttributes || {};

    // self.get = function (name) {
    //     return  name ? self.attributes[name] : self.attributes
    // }
    // self.set = function (nameOrObject, value) {
    //     (arguments.length === 1) ? self.attributes = nameOrObject : self.attributes[nameOrObject] = value;
    // }
    return self;
}

global.BASECOLLECTION = function (args) {
    var collection = this;
    var args = args || {};
    collection.error = null;
    collection.items = args.items || [];

    // collection.get = function (id) {
    //     return (id === undefined) ? collection.items : _.findWhere(collection.items, { _id: id });
    // }
    // collection.set = function (items) {
    //     collection.items = items;
    // }
    
    collection.add = function (items) {
        collection.items = collection.items.concat(items);
    }
    collection.remove = function (id) {  //needs to be rewritten to be more flexible
        collection.items = _.without(collection.items, _.findWhere(collection.items, { _id: id }));
    }
    return collection
}
