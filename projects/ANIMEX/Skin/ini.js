/// <reference path="../resources/js/jquery/jquery-1.7.1.min.js" />
/// <reference path="../resources/js/LOUISE.Core/LOUISE.Core.js" />
/// <reference path="../resources/js/Constants.js" />
/// <reference path="../resources/js/Layout/Layout.js" />
/// <reference path="../resources/js/Layout/Layout.TogglePanels.js" />
/// <reference path="../resources/js/Layout/Layout.Text.js" />
/// <reference path="../resources/js/UI/UI.Render.Slide.js" />
/// <reference path="../resources/js/Navigation/Navigation.js" />

/////////////////////////////////////////////////////////////////////
//
//  TYPE: Static class
//  NAME: Skin
//  NAMESPACE: LOUISE 
//  
//  SUMMARY
//      A skin class that adjusts the player to the
//      Volvo & Renault dual brand Technical Trainer materials
//  
//  PUBLIC FIELDS  
//      ClassName       (Required)
//      Dependencies    (Required)
//      Styles          (Required)
//
//  PUBLIC FUNCTIONS
//      Init            (Required)
//
//  DEPENDENCIES
//      jQuery
//      LOUISE.Environment
//      LOUISE.Core
//      LOUISE.Constants
//      LOUISE.Layout
//      LOUISE.Layout.TogglePanels
//      LOUISE.Layout.Text
//      LOUISE.UI.Render.Slide
//      LOUISE.Navigation
//
//////////////////////////////////////////////////////////////////////

// Ensure that the LOUISE namespace is avaiable
if (LOUISE === null || LOUISE === undefined) { var LOUISE = {}; }

LOUISE.Skin = (function () {

    //////////////////////
    //
    //  Private fields 
    //
    /////////////////////

    var _closeButtonHeight = 28;
    var _coursePanelHeight = 0;
    var _topPanelHeight = 80;
    var _courseMenuAtStartup = false;
    var _animateMenu = false;
    var _lastCourse = null;
    var _lastCourseButton = null;
    var _coursePanelRendered = false;
    var _progressVisibleTimer = null;
    var _menuAlign = 'left';

    //////////////////////
    //
    //  Initiation
    //
    /////////////////////

    (function () {



    })();

    //////////////////////
    //
    //  Private functions 
    //
    /////////////////////

    function _reRenderMenuTree() {

        if (LOUISE.Navigation.CurrentCourse !== _lastCourse) {

            for (var i = 0; i < LOUISE.Core.CBTTree.Courses.Count() ; i++) {
                var currentCourseBtn = $('#course_btn_' + i);
                var myArea = currentCourseBtn.next('.cm-sub-menu-area');
                currentCourseBtn.hide();
                if (i == LOUISE.Navigation.CurrentCourse.Position) {
                    myArea.show();
                }
                else {
                    myArea.hide();
                }
            }

            _lastCourse = LOUISE.Navigation.CurrentCourse;

        }
    }

    function _updateCourseButons() {

        for (var i = 0; i < LOUISE.Core.CBTTree.Courses.Count() ; i++) {

            var crntCourse = LOUISE.Core.CBTTree.Courses.GetAt(i);
            var currentCourseBtn = $('#SS-course-link-btn_' + crntCourse.ID);

            if (crntCourse == LOUISE.Navigation.CurrentCourse) {
                currentCourseBtn.addClass('active');
            }
            else {
                currentCourseBtn.removeClass('active');

                if (crntCourse.IsDone()) {
                    currentCourseBtn.addClass('done');
                }
                else if (crntCourse.Progress() > 0) {
                    currentCourseBtn.addClass('started');
                }
            }
        }

    }

    function _renderCourseButtons() {

        var coursePanel = $('#SS-course-btn-panel');
        if (coursePanel.length) return;

        var courseCount = LOUISE.Core.CBTTree.Courses.Count(true);
        if (courseCount < 2) return;

        coursePanel = $('<div/>').attr('id', 'SS-course-btn-panel');
        $('#header-navigation-panel').append(coursePanel);

        var rtlClass = LOUISE.Application.IsRtl ? ' rtl' : '';

        for (var i = 0; i < courseCount; i++) {
            var crntCourse = LOUISE.Core.CBTTree.Courses.GetAt(i);
            var txt = crntCourse.Label
            var firstClass = i == 0 ? ' first' : '';
            var courseBtn = $('<div/>').attr({
                'data-index': i,
                'id': 'SS-course-link-btn_' + crntCourse.ID,
                'class': 'SS-course-link-btn' + firstClass + rtlClass
            }).text(txt);
            coursePanel.append(courseBtn);

            courseBtn.click(function () {
                var index = parseInt($(this).attr('data-index'), 10);
                var thisCourse = LOUISE.Core.CBTTree.Courses.GetAt(index);

                var firstChild = thisCourse.Children.GetAt(0);

                while (firstChild && firstChild.CBTItemType != 'module') {
                    if (!firstChild.Children) break;
                    firstChild = firstChild.Children.GetAt(0);
                }

                if (firstChild) {
                    LOUISE.Navigation.ToModule(firstChild);
                }

            });
        }

    }

    function _moduleChangedHook(e) {
        $('#header-title').html('<span class="SS-CBT-title">' + LOUISE.Core.CBTTree.CBTTitle + '</span>&nbsp;&nbsp;' + LOUISE.Navigation.CurrentModule.Description + '');
        $('#header-navigation-panel').show();
        $('#bread-crumbs').hide();
    }

    function _layoutHook(e) {
        $('#panel_left_middle_container')
            .height($('#panel_module_container').innerHeight())
            .css('top', LOUISE.Constants.TOP_CONTAINER_HEIGHT + 'px');

        if (!_courseMenuAtStartup) {
            LOUISE.Layout.TogglePanels.CourseMenu(false)
            _courseMenuAtStartup = true;
        }

    }


    function _displayProgress() {
        $('#progress-bar-Bg, #SS-prog-indicator').stop().animate({ 'top': '-17px' }, 200, _reNewProgressVisible);
    }

    function _reNewProgressVisible() {
        clearTimeout(_progressVisibleTimer);
        _progressVisibleTimer = setTimeout(function () {
            _hideProgress();
        }, 3000);
    }

    function _hideProgress() {
        $('#progress-bar-Bg, #SS-prog-indicator').stop().animate({ 'top': '0px' }, 200);
    }

    function _guiModeChangedHook(e) {

    }


    function _trainerText() {

    }

    function _screenText(e) {


    }


    //////////////////////
    //
    //  Overrides
    //
    /////////////////////


    // Sets up the main screen text area to the Volvo Technical Trainer specs
    LOUISE.UI.Render.Slide.MainScreenText = (function (base) {

        function extendsMainScreenText(e) {
            base(e);
            _screenText(e);
        }

        return extendsMainScreenText;

    })(LOUISE.UI.Render.Slide.MainScreenText);

    // Override the Layout to be able to change the header when in fullscreen
    LOUISE.Layout.DefaultScreens = (function (base) {

        function extendsDefaultScreens(e) {

            var isFullscreen = $(window).innerHeight() >= screen.height - 10;
            var titlePos = 0;
            _coursePanelHeight = LOUISE.Core.CBTTree.Courses.Count() > 1 ? 20 : 0;

            if (isFullscreen) {
                LOUISE.Constants.TOP_CONTAINER_HEIGHT = _topPanelHeight + _closeButtonHeight + _coursePanelHeight;
                titlePos = _closeButtonHeight;
                $('#close-button, #header-divider').show();
            }
            else {
                LOUISE.Constants.TOP_CONTAINER_HEIGHT = _topPanelHeight + _coursePanelHeight;
                $('#close-button, #header-divider').hide();
            }
            $('#header-title').css({
                'margin-top': titlePos + 'px',
                'line-height': _topPanelHeight + 'px'
            });

            LOUISE.UI.Render.Progress.CBT();

            _layoutChange = true;

            base(e);
        }

        return extendsDefaultScreens;

    })(LOUISE.Layout.DefaultScreens);

    // Override the course menu toggle behaviour
    LOUISE.Layout.TogglePanels.CourseMenu = (function (base) {

        function extendsCourseMenu(show) {

            var btn = $('#menu-toggle-btn');

            var animTime = _animateMenu ? 300 : 0;

            if (show && LOUISE.Application.CourseStarted) {

                $('#skin-SS-menu-shade').fadeTo(0, 1);
                if (LOUISE.Application.IsRtl) {
                    $('#panel_left_middle_container').animate({ 'right': '0px' }, animTime);
                    $('#panel_module_container').animate({ 'right': (LOUISE.Constants.COURSE_TREE_SETTINGS.width) + 'px' }, animTime);
                }
                else {
                    $('#panel_left_middle_container').animate({ 'left': '0px' }, animTime);
                    $('#panel_module_container').animate({ 'left': (LOUISE.Constants.COURSE_TREE_SETTINGS.width) + 'px' }, animTime);
                }

                LOUISE.Layout.TogglePanels.CourseMenuVisible = true;
                btn.addClass('active');

            }
            else {

                if (LOUISE.Application.IsRtl) {
                    $('#panel_left_middle_container').animate({ 'right': -LOUISE.Constants.COURSE_TREE_SETTINGS.width + 'px' }, animTime);
                    $('#panel_module_container').animate({ 'right': '0px' }, animTime, function () {
                        $('#skin-SS-menu-shade').fadeTo(0, 0);
                    });
                }
                else {
                    $('#panel_left_middle_container').animate({ 'left': -LOUISE.Constants.COURSE_TREE_SETTINGS.width + 'px' }, animTime);
                    $('#panel_module_container').animate({ 'left': '0px' }, animTime, function () {
                        $('#skin-SS-menu-shade').fadeTo(0, 0);
                    });
                }

                LOUISE.Layout.TogglePanels.CourseMenuVisible = false;
                btn.removeClass('active');
            }

            _animateMenu = false;

        }

        return extendsCourseMenu;

    })(LOUISE.Layout.TogglePanels.CourseMenu);


    // Override the manu button to enable animating the menu at only click
    LOUISE.UI.EventHandlers.MenuToggleBtnClick = (function (base) {

        function extendsMenuToggleBtnClick(e) {
            _animateMenu = true;
            base(e);
        }

        return extendsMenuToggleBtnClick;

    })(LOUISE.UI.EventHandlers.MenuToggleBtnClick);

    // Hide all elements in  the course menu tree that are not in the current course
    LOUISE.UI.Render.NavigationResult.Course = (function (base) {

        function extendsCourse(e) {
            base(e);
            _reRenderMenuTree();
            _renderCourseButtons();
            _updateCourseButons();
        }

        return extendsCourse;

    })(LOUISE.UI.Render.NavigationResult.Course);


    // Hide all elements in  the course menu tree that are not in the current course
    LOUISE.UI.Render.Progress.Module = (function (base) {

        function extendsModule(e) {
            base(e);
            var active = $('#module_btn_' + e.Index).hasClass('active');

            if (active) return;

            if (e.IsDone()) {
                $('#module_prgress_bar_' + e.Index).addClass('done');
            }
            else if (e.Progress() > 0) {
                $('#module_prgress_bar_' + e.Index).addClass('started');
            }


        }

        return extendsModule;

    })(LOUISE.UI.Render.Progress.Module);

    // Render the custom progress bar
    LOUISE.UI.Render.Progress.CBT = (function (base) {

        function extendsCBT(e) {
            base(e);

            var percent = $('#progress-bar-Bg').text();
            percent = parseInt(percent.replace('%', ''), 10);

            if (isNaN(percent)) return;

            var w = $('#progress-bar-Bg').outerWidth() * (percent / 100);

            $('#SS-prog-indicator').animate({ 'width': Math.round(w) + 'px' }, 200);
            $('#progress-bar-Bg, #SS-prog-indicator').html('&nbsp;&nbsp;' + percent + '%&nbsp;&nbsp;')
        }



        return extendsCBT;

    })(LOUISE.UI.Render.Progress.CBT);


    // Add stuff to the application start 
    LOUISE.Application.StartCourse = (function (base) {

        function extendsStartCourse(e) {
            base(e);

            $('#panel_bottom_container').prepend($('<div/>').attr({
                'id': 'SS-prog-indicator', 'class': 'nav-info-text'
            }));
            $('#progress-bar-Bg').prependTo('#panel_bottom_container');

            $('#panel_bottom_container').mouseenter(_displayProgress);

            _menuAlign = LOUISE.Application.IsRtl ? 'right' : 'left';

            if (LOUISE.Application.IsRtl) {

                $('#skin-SS-menu-shade, #SS-prog-indicator, #progress-bar-Bg, #nav-btn-prev, #nav-btn-next').addClass('rtl');


                $('#panel_left_middle_container').css({
                    'left': 'auto',
                    'right': -LOUISE.Constants.COURSE_TREE_SETTINGS.width + 'px'
                });

                $('#panel_module_container').css({
                    'left': 'auto',
                    'right': '0px'
                });
            }

        }

        return extendsStartCourse;

    })(LOUISE.Application.StartCourse);

    //////////////////////
    //
    //  Return object
    //
    /////////////////////

    return {

        //////////////////////
        //
        //  Public fields 
        //
        /////////////////////

        // This is the name that will be appended to all newly created DOM objects for the skin to use
        ClassName: 'skin-SS',

        // This is the an Array containing the paths to all javascript files needed for this skin
        Dependencies: ['js/Brand.js'],
        //Dependencies: [],

        // This is the an Array containing the paths to all css files needed for the skin
        Styles: ['skin-SS.css', 'css/Brand.css'],
        //Styles: ['skin-SS.css'],

        //////////////////////
        //
        //  Public functions 
        //
        /////////////////////

        // This function MUST BE PRESENT. The main application calls this function after load
        Init: function () {

            // Important!! Add th css class name to all relevant DOM objects for the css to stick
            $('body, div, span, ul, li, iframe').addClass(this.ClassName);


            LOUISE.Constants.BOTTOM_CONTAINER_HEIGHT = 64;
            LOUISE.Constants.TOP_CONTAINER_HEIGHT = _topPanelHeight;
            LOUISE.Constants.DISPLAY_4_BY_3 = false;
            LOUISE.Constants.COURSE_TREE_SETTINGS.width = 320;
            LOUISE.Constants.COURSE_TREE_SETTINGS.inset = 3;

            LOUISE.Constants.TEXT_PLATE_HEIGHT = '100%';
            LOUISE.Constants.TEXT_PLATE_PADDING = {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }

            LOUISE.Constants.SCALE_TEXT_TO_ORIGIN = false;
            LOUISE.Constants.AUTO_SCALE_PRIMARY_SCREEN_TEXT = false;
            LOUISE.Constants.ADD_EMPTY_LASTMODULE = false;



            $('#panel_left_middle_container').css({
                'position': 'absolute',
                'left': -LOUISE.Constants.COURSE_TREE_SETTINGS.width + 'px'
            }).show();

            $('#panel_module_container').append($('<div/>').attr('id', 'skin-SS-menu-shade'));

            // Add the div for holding module icons
            $('#panel_slide_area').append($('<div/>').attr('id', 'icon-area').css({
                'position': 'absolute',
                'top': '0px',
                'width': '100%',
                'height': '48px',
                'display': 'none',
            }));

            // Calls _moduleChangedHook after each module change in the main application 
            LOUISE.Core.Events.Add(LOUISE.Navigation.ON_MODULE_CHANGED, _moduleChangedHook);
            // Calls _layoutHook after each layout reset in the main application
            LOUISE.Core.Events.Add(LOUISE.Layout.ON_DEFAULT_LAYOUT, _layoutHook);
            // Calls _guiModeChangedHook after each GUI mode change in the main application
            LOUISE.Core.Events.Add(LOUISE.Layout.GUIMode.ON_GUI_MODE_SET, _guiModeChangedHook);
        }
    };

})();

