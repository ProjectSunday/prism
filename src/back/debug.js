if (!PRISM_DEBUGGING) return;

//https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script
var FgGreen = '\x1b[32m';
var FgRed = '\x1b[31m';
var FgWhite = "\x1b[37m";
var reset = '\x1b[0m';



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
    var path = __stack[2].getFileName();
    var pathArray = path.split(/[/\\]/);
    return pathArray[pathArray.length - 1];
  }
});

Object.defineProperty(global, '__functionName', {
  get: function(){

    var functionName = __stack[2].getFunctionName();

    return (functionName ? '(' + functionName + ')' : null );
  }
});

/***************/

global.trace = function() {
    var msg = reset + FgGreen +
            __fileName + ':' +
            __lineNumber + 
            ( __functionName ? ' ' + __functionName: '' );

    for (var i in arguments) {
        msg +=  FgGreen + ' | ' + reset;
        if (typeof arguments[i] === 'object') {
            msg += JSON.stringify(arguments[i]);
        } else {
            msg += arguments[i];
        }
    }
    console.log(msg);
}

global.red = function () {
    var msg = reset + FgRed +
            __fileName + ':' +
            __lineNumber + 
            ( __functionName ? ' ' + __functionName: '' );

    for (var i in arguments) {
        msg +=  FgRed + ' | ' + reset;
        if (typeof arguments[i] === 'object') {
            msg += JSON.stringify(arguments[i]);
        } else {
            msg += arguments[i];
        }
    }
    console.log(msg);
}

