var Q           = require(NODE_MODULES + 'q');

var CATEGORY_COLLECTION_NAME = 'categories';

module.exports = function () {
    return {
        create: PROMISIFY(create),
        read: PROMISIFY(read)
    }

    function create(args, resolve, reject) {
        var args = args || {};

        var insert = function () {
            var newCategory = {
                created: new Date(),
                imageUrl: args.imageUrl,
                name: args.name
            };
            return DB.collection(CATEGORY_COLLECTION_NAME).insertOne(newCategory);
        }

        var read = function (insertResult) {
            var id = insertResult.insertedId;
            return DB.collection(CATEGORY_COLLECTION_NAME)
                    .find({ _id: id })
                    .toArray();
        }

        insert()
            .then(read)
            .then(function (readResult) {
                resolve(readResult[0]);
            })
            .catch(reject);

    }

    function read(args, resolve, reject) {
        var args = args || {};

        var query = args.query || {};

        DB.collection(CATEGORY_COLLECTION_NAME)
            .find(query)
            .sort({name: 1})
            .toArray()
            .then(resolve, reject);
    }

}

