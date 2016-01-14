/// <reference path="jquery/jquery-1.7.2.min.js" />
var pageNavigation = (function () {
    var me = {};

    var currentHash;
    var locationParams = {};

    var currentHashPage;
    var lastHashpage;

    me.Update = function () {

        currentHash = window.location.hash;
        getHashValues(currentHash);
        var thePage = $('#' + currentHashPage);

        var xDiff = thePage.length ? thePage.offset().left : 0;
        var yDiff = thePage.length ? thePage.offset().top : 0;

        var xTarget = $('#io-work-area').offset().left - xDiff;
        var yTarget = $('#io-work-area').offset().top - yDiff;

        $('#io-work-area').animate({ left: xTarget, top: yTarget }, 0);

    }

    var navTimer = setInterval(function () {
        if (currentHash != window.location.hash) {
            currentHash = window.location.hash;
            getHashValues(currentHash);
            if (locationParams['page'] && currentHashPage != locationParams['page']) {
                lastHashpage = currentHashPage;
                currentHashPage = locationParams['page'];
                navigateToPage();
            }
        }
    }, 100);

    var getHashValues = function (i_hash) {

        if (i_hash.indexOf('#') == 0) {
            i_hash = i_hash.substring(1);
        }
        var parts = i_hash.split('&');

        locationParams = {};

        for (var i = 0; i < parts.length; i++) {
            var keyVals = parts[i].split('=');
            if (keyVals.length != 2) continue;
            locationParams[keyVals[0]] = keyVals[1];
        }
    }

    var navigateToPage = function () {

        var thePage = $('#' + currentHashPage);
        var fromPage = $('#' + lastHashpage);

        if (!thePage.length) return;


        var currScrollX = fromPage.length ? fromPage.offset().left : 0;
        var currScrollY = fromPage.length ? fromPage.offset().top : 0;

        var xDiff = currScrollX - thePage.offset().left;
        var yDiff = currScrollY - thePage.offset().top;

        var xTarget = $('#io-work-area').offset().left + xDiff;
        var yTarget = $('#io-work-area').offset().top + yDiff;

        var speed = Math.abs(xDiff) > Math.abs(yDiff) ? Math.abs(xDiff / 2) : Math.abs(yDiff / 2);
        speed = Math.max(Math.min(speed, 1000), 300);
        console.log(speed);
        $('#io-work-area').animate({ left: xTarget, top: yTarget }, speed, 'swing');

    }

    return me;
} ());