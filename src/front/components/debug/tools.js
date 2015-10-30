//livereload
window.LiveReloadOptions = { host: 'localhost', mindelay: 1000, maxdelay: 2000 };
require('livereload-js');
// require('./restartflag');

// if (window.ReloadTimer)
//laksjdf

//aslkdfjsdfasdfsdf

//reload timer
$(function () {

    var start = new Date();

    var timerDiv = $('<div>Page reloaded: <span style="font-size: 14px;"></span> seconds ago.</div>').css({
                            'position': 'absolute',
                            'bottom': '0px',
                            'right': '0px',
                            'font-size': '10px'
                        }).appendTo('body');

    var timerId = setInterval(function () {
        var now = new Date();
        var seconds = Math.round((now - start) / 100) / 10;
        timerDiv.find('span').text(seconds);
    }, 600);


    // if (window.restartReloadTimer) {
    //     start = new Date();
    //     window.restartReloadTimer = false;
    // }

    // function restart() {
    //     start = new Date();
    // };


    $(document).on('LiveReloadDisconnect', function () {
        timerDiv.text('Disonnected from server.')
            .css({
                'color':'red',
                'font-size': '14px'
            });
        clearInterval(timerId);
    }).on('LiveReloadConnect', function () {
        console.log('livereloadconnect');
    });

});