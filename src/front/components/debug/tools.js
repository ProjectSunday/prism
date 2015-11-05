//livereload
window.LiveReloadOptions = { host: 'localhost', mindelay: 1000, maxdelay: 2000 };
require('livereload-js');

//reload timer
$(function () {

    var start = new Date();

    var timerDiv = $('<div>Page reloaded: <span style="font-size: 14px;"></span> seconds ago.</div>').css({
                            'position': 'fixed',
                            'bottom': '0px',
                            'right': '0px',
                            'font-size': '10px'
                        }).appendTo('body');

    var timerId = setInterval(function () {
        var now = new Date();
        var seconds = Math.round((now - start) / 100) / 10;
        timerDiv.find('span').text(seconds);
    }, 600);

    $(document).on('LiveReloadDisconnect', function () {
        timerDiv.text('Disonnected from server.')
            .css({
                'color':'red',
                'font-size': '14px'
            });
        clearInterval(timerId);
    });

});

//tracing

window.trace = function (obj) {
    var caller = (new Error).stack.split('\n')[2];
    console.info('=>', caller, '|', obj);
}

window.red = function (obj) {
    var caller = (new Error).stack.split('\n')[2];
    console.info('%c=> ' + caller, 'background: red; color: white;', '|', obj);
}