module.exports = function (app) {
    //authentication related routes are in authentication.js
    
    // var routesPath = './routes/';
    require('./debugging.route')(app);

    require('./category.route')(app);
    require('./requested.route')(app);

    // require(routesPath + 'profile.js');
    // require(routesPath + 'upcoming.js');
    // require(routesPath + 'fakemeetupapi.js')(app);

}
