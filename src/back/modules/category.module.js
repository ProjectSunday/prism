var Q               = require(NODE_MODULES + 'q');

var Database        = require('./database/database.module');


module.exports = {

}

module.exports.Collection = function (args) {
    var args = args || {};
    var collection = new BASECOLLECTION(args.initialItems);
    collection.req = args.req;

    collection.load = PROMISIFY(function (loadArgs, resolve, reject) {
        Database.Category.read().then(function (categories) {
            collection.items = categories;
            resolve();
        }, function (error) {
            collection.error = error;
            reject();
        });

    });

    return collection;
}



