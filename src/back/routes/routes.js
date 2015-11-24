module.exports = (function (app) {
    //authentication related routes are in authentication.js
    
    // var routesPath = './routes/';

    require('./category.route')(app);

    // require(routesPath + 'profile.js');
    // require(routesPath + 'upcoming.js');
    // require(routesPath + 'requested.js');
    // require(routesPath + 'testing.js')(app);
    // require(routesPath + 'fakemeetupapi.js')(app);

})();
