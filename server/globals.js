global.PRISM_ENVIRONMENT			= process.env.environment 				|| 'local';                                     //environment=production node src/backend/server.js
global.PRISM_PORT                  	= process.env.PORT                      || 3000;                                        //port=8080 node src/backend/server.js
global.PRISM_DB_CONNECTION_STRING  	= process.env.dbConnectionString        || 'mongodb://localhost:27017/prism';

if (PRISM_ENVIRONMENT === 'local') {
	global.PRISM_DEBUGGING			= true;
} else {
	global.PRISM_DEBUGGING			= process.env.debugging 				|| false;
}

global.NODE_MODULES      		= __dirname + '/../node_modules/';

global.PRISM_ROOT    			= __dirname + '/../';
global.PRISM_MODULES   			= __dirname + '/modules/';
global.PRISM_FRONTEND   		= __dirname + '/../';

global.PRISM_DIST       		= __dirname + '/../dist/';





