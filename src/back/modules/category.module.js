var Q               = require(NODE_MODULES + 'q');

var Database        = require( + 'database.module');

module.exports = {
    Collection: Collection
};

function Collection (options) {

    var collectionSelf = new BASECOLLECTION();

    collectionSelf.error = null;
    collectionSelf.req = options.req;

    collectionSelf.load = PROMISIFY(function (params, resolve, reject) {
            
            Database.read({ collectionName: 'Categories' }).then(function (categories) {
                collectionSelf.add(categories);
                resolve();
            }, function (error) {
                collectionSelf.error = error;
                reject();
            });
    });
        
    return collectionSelf;
}



