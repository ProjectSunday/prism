if (PRISM_ENVIRONMENT !== 'local') return;

Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, '__lineNumber', {
  get: function(){
    return __stack[2].getLineNumber();
  }
});

Object.defineProperty(global, '__fileName', {
  get: function(){
    return __stack[2].getFileName();
  }
});

Object.defineProperty(global, '__functionName', {
  get: function(){
    return __stack[2].getFunctionName();
  }
});

/***************/

global.trace = function(message) {
    console.log(__fileName + ':' + __lineNumber + ' ' + ( __functionName ? __functionName + ' ' : '' ) + '--------------------------------');
    for (var i in arguments) {
        console.log(i + ':');
        console.log('    ', arguments[i]);
    }
}

global.red = function () {
    console.log('\033[31m' + __fileName + ':' + __lineNumber + ' ' + ( __functionName ? __functionName + ' ' : '' ) + '--------------------------------\033[0m');
    for (var i in arguments) {
        console.log('    ', arguments[i]);
    }
}

