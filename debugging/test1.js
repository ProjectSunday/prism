require('../src/back/globals.js');  //must be first
require('../src/back/debug.js');
require('../src/back/core.js');
require('../src/back/mongo.js');


var Database = require('../src/back/modules/database.module');

var tests = new Database('tests');

var args = {
	data: { one: 1, two: 'two' }
};
tests.create(args);



