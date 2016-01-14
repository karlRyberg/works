var Util = (function () {
    var me = {};


    me.ZeroPad = function (input, len) {
        var zeros = '00000000000000000000000000000000000000';
        input += '';
        return zeros.slice(0, len - input.length) + input;

    }

    me.ShowLoader = function (callback) {
        $('#preloader').css('visibility', 'visible');
        if (callback) callback();
    }

    me.HideLoader = function (callback) {
        $('#preloader').css('visibility', 'hidden');
        if (callback) callback();
    }

    return me;
} ());