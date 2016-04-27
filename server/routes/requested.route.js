var Q           = require(NODE_MODULES + 'q');

var Requested    = require(PRISM_MODULES + 'requested.module');

module.exports = function (app) {
    
    // app.get('/api/v1/requested', function (req, res) {

    //     var categories = new Category.Collection({
    //         req: req
    //     });
        
    //     categories.load().then(function () {
    //         res.json(categories.items);
    //     }, function () {
    //         res.status(500).send(categories.error);
    //     });
        
    // });    

    app.post('/api/v1/requested', function (req, res) {

        // var newRequest = new Requested({
        //     req: req,
        //     attributes: {
        //         name: 'requestname',
        //         test:'3333'
        //     }
        // });


        // var newRequest = new Requested({
        //     req: req,
        //     name: req.body.name,
        //     categoryId: req.body.categoryId
        //     // requester: req.user._id,
        //     // interestedUsers: [ req.user._id ]
        // })
        
        // newRequest.save().then(function () {
            
        //     // res.json(newRequest.attributes);
        // }, function () {
        //     res.status(500).send(newRequest.error);
        // });
        
    });


    
}
