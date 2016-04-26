var Q               = require(NODE_MODULES + 'q');

// var Database        = require('./database/database.module');

var REQUESTED_COLLECTION_NAME = 'requestedclasses';

module.exports = function (args) {
    var args = args || {};

    var self = new BASEITEM({
        name: args.name,
        categoryId: args.categoryId
    });

    /******/
    self.req = args.req;

    /******/
    self.save = PROMISIFY(function (saveArgs, resolve, reject) {

        // var query = self.attributes._id ? { _id: self.attributes._id } : { _id: null };

        trace(self.attributes);

        var collection = DB.collection(REQUESTED_COLLECTION_NAME);


        if (self.attributes._id) {

            var storeOperation = collection.create({
                data: {
                    
                }
            })
            var savingOperation = collection.updateOne(
                { _id: self.attributes._id },
                { $set: self.attributes },
                { upsert: true });
        } else {


            
            var savingOperation = collection.insert(self.attributes).then(function (r) {
                    trace('111', r);
                    self.attributes._id = r.ops[0]._id;
                    trace(self.attributes._id);
                    // self.attributes
                });

        }

        updateOrInsert()
            .then(read)
            .then(setAttributes)
            .catch(setError)

        function updateOrInsert() {

            if (self.attributes._id) {
                return collection.updateOne(

                );
            } else {
                return 
            }
        }

        var read = function () {
            // return Q.Promise(function (resolve, reject) {
            //     red('read',result);
            //     resolve({ blah: 'blah'});
            // });

            return collection.find({ _id: self.attributes._id }).toArray();
        }



        function setAttributes(data) {
            red(data[0]);
            self.attributes = data[0]; resolve();
        }
        function setError(error) {
            self.error = error; reject();
        }

    });

    return self;
}

module.exports.Collection = function (args) {
    // var args = args || {};
    // var collection = new BASECOLLECTION(args.initialItems);
    // collection.req = args.req;

    // collection.load = PROMISIFY(function (loadArgs, resolve, reject) {
    //     Database.Category.read().then(function (categories) {
    //         collection.items = categories;
    //         resolve();
    //     }, function (error) {
    //         collection.error = error;
    //         reject();
    //     });

    // });

    // return collection;
}


function validateRequest() {

}
