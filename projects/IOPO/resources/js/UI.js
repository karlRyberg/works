/// <reference path="jquery/jquery-1.7.2.min.js" />

var UI = (function () {
    var me = {};
    me.AnimationDuration = 300;

    var explorePanel = $('#explore-selector-panel');
    var revealTimer;
    me.RevealExploreLabel = function (i_duration) {
        if (revealTimer) clearInterval(revealTimer);
        var animLength = $('#explore-selector-label').outerWidth();
        explorePanel.stop(true, false);
        explorePanel.animate({ width: animLength }, me.AnimationDuration, 'swing');
        if (i_duration > -1) {
            revealTimer = setTimeout(hideExploreLabel, i_duration * 1000);
        }
    }

    var hideExploreLabel = function () {
        explorePanel.animate({ width: $('#explore-selector-button').outerWidth() }, me.AnimationDuration, 'swing');
        revealTimer = null;
    }

    $('#explore-selector-panel').hover(
        function () {
            me.RevealExploreLabel();
        },
        function () {
            hideExploreLabel();
        }
    );

    $('#explore-selector-panel').bind('touchstart touchmove touchend', function () {
        $('#explore-selector-panel').unbind('mouseenter mouseleave');
    });

    return me;
} ());