global.PRISM_ENVIRONMENT           = process.env.environment               || 'local';                                     //environment=production node src/backend/server.js
global.PRISM_PORT                  = process.env.PORT                      || 3000;                                        //port=8080 node src/backend/server.js
global.PRISM_DB_CONNECTION_STRING  = process.env.dbConnectionString        || 'mongodb://localhost:27017/prism';

global.PRISM_PROJECT_FOLDER    = __dirname + '/../../';
global.PRISM_NODE_MODULES      = __dirname + '/../../node_modules/';
// global.PRISM_MODULES_FOLDER    = __dirname + '/modules/';
global.PRISM_FRONTEND_FOLDER   = __dirname + '/../front/';

global.PRISM_DIST_FOLDER       = PRISM_PROJECT_FOLDER + 'dist/'


