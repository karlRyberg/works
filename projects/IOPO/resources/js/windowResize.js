var windowResize = (function () {

    var me = {};

    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "000000000";
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    me.onBeginResize = function () {
        return true;
    }

    me.onFinishedResize = function () {
        return true;
    }

    var inresize = false;

    me.onWindowResize = function () {

        if (!inresize) {
            me.onBeginResize();
            inresize = true;
        }

        waitForFinalEvent(function () {

            me.onFinishedResize();
            inresize = false;

        }, 500, "onWindowResize");

    }

    $(window).bind('resize orientationchange', function () {
        me.onWindowResize();
    });

    return me;

} ());