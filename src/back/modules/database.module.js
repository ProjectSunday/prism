var Q           = require(NODE_MODULES + 'q');

var CATEGORY_COLLECTION_NAME = 'categories';

module.exports = function (collectionName) {
    if (!collectionName) throw 'You dun messed up.  I need a collectionName';

    return {
        create: PROMISIFY(create),
        read: PROMISIFY(read),
        update: PROMISIFY(update),
        del: PROMISIFY(del)
    }

    function create(args, resolve, reject) {
        
        trace('collectionName', collectionName);
        trace(args);

        // red(DB);
        // console.log(DB);

        DB.collection(collectionName).insertOne(args.data).then(function (r) {
            trace(r);
            resolve(r.insertedId);
        }, function (error) {
            reject(error);
        });
    }


    // function create(args, resolve, reject) {
    //     var args = args || {};

    //     var insert = function () {
    //         var newCategory = {
    //             created: new Date(),
    //             imageUrl: args.imageUrl,
    //             name: args.name
    //         };
    //         return DB.collection(CATEGORY_COLLECTION_NAME).insertOne(newCategory);
    //     }

    //     var read = function (insertResult) {
    //         var id = insertResult.insertedId;
    //         return DB.collection(CATEGORY_COLLECTION_NAME)
    //                 .find({ _id: id })
    //                 .toArray();
    //     }

    //     insert()
    //         .then(read)
    //         .then(function (readResult) {
    //             resolve(readResult[0]);
    //         })
    //         .catch(reject);

    // }

    function read(args, resolve, reject) {
        var args = args || {};

        var query = args.query || {};
        var sort = args.sort || { _id: 1 };

        DB.collection(collectionName)
            .find(query)
            .sort(sort)
            .toArray()
            .then(function (r) {
                trace(r);
                resolve(r);
            }, function (error) {
                reject(error);
            });
    }

    function update(args, resolve, reject) {

        if (!args) throw 'Database.update needs args';
        if (!args.query) throw 'Database.update needs a query';
        if (!args.data) throw 'Database.update needs data to update';

        DB.collection(collectionName).updateOne(query, { $set: self.data }, { upsert: true }).then(function (r) {
            trace(r);
            resolve(r)
        }, function (error) {
            reject(error);
        });
    }

    function del(args, resolve, reject) {
        if (!args) throw 'Database.del needs args';
        if (!args.query) throw 'Database.del needs a query';

        DB.collection(collectionName).deleteOne(query).then(function (a,b,c) {
            trace(a,b,c);
            resolve();
        }, resovle)

    }

}

