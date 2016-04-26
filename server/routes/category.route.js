var Q           = require(NODE_MODULES + 'q');

var Category    = require(PRISM_MODULES + 'category.module');

module.exports = function (app) {
    
    app.get('/api/v1/category/all', function (req, res) {

        var categories = new Category.Collection({
            req: req
        });


        
        categories.load().then(function () {
            res.json(categories.items);
        }, function () {
            res.status(500).send(categories.error);
        });
        
    });
    
}
