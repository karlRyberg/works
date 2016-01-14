
/////////////////////////////////////////////////////////////////////
//
//  TYPE: 
//  NAME: 
//  NAMESPACE: 
//  
//  SUMMARY
//      
//  
//  PUBLIC FIELDS  
//      
//
//  PUBLIC FUNCTIONS
//      
//
//  DEPENDENCIES
//      
//
//////////////////////////////////////////////////////////////////////

// Ensure that the LOUISE namespace is avaiable
if (LOUISE === null || LOUISE === undefined) { var LOUISE = {}; }

LOUISE.Skin.Brand = (function () {

    //////////////////////
    //
    //  Private fields 
    //
    /////////////////////

    var filterIconMap = {
        volvo: 'Volvo-Slide.png',
        renault: 'Renualt-Slide.png'
    };

    var _skinVariants = [
    {
        id: 0,
        name: 'Volvo Trucks',
        image: 'Skin/Images/Ironmark.png',
        logoArea: 'header-title',
        color: '#000f60',
        filter: ['volvo']
    },
    {
        id: 1,
        name: 'Renault Trucks',
        image: 'Skin/Images/RenaultLogo.png',
        logoArea: 'header-title',
        color: '#e0001a',
        filter: ['renault']
    },
    {
        id: 2,
        name: 'Volvo &amp; Renault Trucks',
        image: 'Skin/Images/Logos.png',
        logoArea: 'header-title',
        color: '#333333',
        filter: ['volvo', 'renault']
    }
    ];
    var _selectedSkin = _skinVariants[_skinVariants.length - 1];

    var _userSelectSkin = null;

    //////////////////////
    //
    //  Initiation
    //
    /////////////////////

    (function () {

        // Calls _guiModeChangedHook after each GUI mode change in the main application
        LOUISE.Core.Events.Add(LOUISE.Layout.GUIMode.ON_GUI_MODE_SET, _guiModeChangedHook);

    })();

    //////////////////////
    //
    //  Private functions 
    //
    /////////////////////

    function _renderSkinMenu(callback) {

        $('#main-container').css('visibility', 'visible');

        LOUISE.Layout.GUIMode.Set('language menu');

        $('#custom-slide-indicator').fadeTo(0, 0);

        var cnt = 0;
        var htmlCont = [];
        htmlCont[cnt++] = '<ul id="Skin_menu">';
        for (var i = 0; i < _skinVariants.length; i++) {
            htmlCont[cnt++] = '<li title="' + _skinVariants[i].name + '" class="skin-DBT SkinSelectBtn" ';
            htmlCont[cnt++] = 'data-color="' + _skinVariants[i].color + '" ';
            htmlCont[cnt++] = 'data-image-path="' + _skinVariants[i].image + '" ';
            htmlCont[cnt++] = 'data-skin-id="' + _skinVariants[i].id + '" ';
            htmlCont[cnt++] = 'id="skin_btn_' + _skinVariants[i].id + '">';
            htmlCont[cnt++] = _skinVariants[i].name;
            htmlCont[cnt++] = '</li>';
        }

        htmlCont[cnt++] = '</ul>';

        $('#panel_content_media').html(htmlCont.join('')).promise().done(function () {

            var canvasWidth = $('#panel_content_media').innerWidth();
            var canvasHeight = $('#panel_content_media').innerHeight();
            var menuWidth = $('#Skin_menu').outerWidth();
            var menuHeight = $('#Skin_menu').outerHeight();
            var topPos = ((canvasHeight - menuHeight) / 2);


            $('#Skin_menu').css('top', topPos + 'px');
            $('#Skin_menu').css('left', ((canvasWidth - menuWidth) / 2) + 'px');
        });

        $('.skin-DBT.SkinSelectBtn').click(function () {

            var selInt = parseInt($(this).attr('data-skin-id'), 10);
            LOUISE.Skin.Brand.SetSelectedSkin(selInt);

            for (var i = 0; i < _selectedSkin.filter.length; i++) {
                LOUISE.Application.InitialFilter.push(_selectedSkin.filter[i]);
            }

            var syncCheckNum = Math.random();
            // Send a message to the other window
            LOUISE.NavigationProxy.AddMsg('function(){LOUISE.Skin.Brand.SetSelectedSkin(' + selInt + ');LOUISE.Application.InitialFilter=[\'' + LOUISE.Application.InitialFilter.join('\',\'') + '\'];var check=' + syncCheckNum + ';}');

            callback();

            // Send a message to the other window
            LOUISE.NavigationProxy.AddMsg('function(){LOUISE.Application.SelectedLanguage=\'' + LOUISE.Application.SelectedLanguage + '\';LOUISE.Application.StartCourse();var check=' + syncCheckNum + ';}');

        });

        $('.skin-DBT.SkinSelectBtn').mouseover(function () {
            var col = $(this).attr('data-color');

            $(this).css({
                'background-color': col,
                'border-color': col
            });
            $(this).addClass('hover');
        });
        $('.skin-DBT.SkinSelectBtn').mouseleave(function () {
            $(this).css({
                'background-color': '',
                'border-color': '#cccccc'
            });
            $(this).removeClass('hover');
        });

        $('body').css('cursor', 'default');


        LOUISE.UI.Preloader.Hide();
    }

    function _setBrandFromPrintFilter(callback) {

        // see if the filters match any present skin
        var setFilterString = '';
        for (var i = 0; i < _skinVariants.length; i++) {
            var isSameFilterList = LOUISE.Environment.PrintFilters.sort().join(',') === _skinVariants[i].filter.sort().join(',');
            if (isSameFilterList) {
                LOUISE.Skin.Brand.SetSelectedSkin(i);
                // Send a message to the other window
                LOUISE.NavigationProxy.AddMsg('LOUISE.Skin.Brand.SetSelectedSkin(' + i + ');var check=' + syncCheckNum + ';}');
                break;
            }
        }

        var syncCheckNum = Math.random();

        if (callback) callback();
    }

    function _guiModeChangedHook(e) {
        if (_userSelectSkin) {
            $('#' + _selectedSkin.logoArea).css('background-image', 'url("' + _selectedSkin.image + '")');
            _addIcon();
        }
    }

    function _addIcon() {

        var iconFile = '';
        var iconActive = 0;

        if (LOUISE.Navigation.CurrentModule) {

            iconFile = LOUISE.Navigation.CurrentModule.GetProperty('iconLogoFile');
            iconActive = parseInt(LOUISE.Navigation.CurrentModule.GetProperty('iconLogoActive'), 10);


            var myFilters = LOUISE.Navigation.CurrentModule.GetProperty('filter');
            var matches = 0;

            for (var i = 0; i < myFilters.length; i++) {
                var myCurrentFilter = myFilters[i];
                for (var j = 0; j < LOUISE.Application.InitialFilter.length; j++) {
                    var currentSelectedFilter = LOUISE.Application.InitialFilter[j];

                    if (myCurrentFilter == currentSelectedFilter) {
                        matches++;
                        continue;
                    }
                }
            }

            var notOnlyInFilterList = myFilters.length > 0 && matches < LOUISE.Application.InitialFilter.length;

            if (!iconFile && notOnlyInFilterList) {
                iconFile = filterIconMap[myFilters[0]];
                iconActive = 1;
            }

        }

        if ((LOUISE.Environment.IsLectureScreen || !LOUISE.Environment.MultiScreen) && iconFile != '' && iconActive == 1) {

            var iconAlign = LOUISE.Navigation.CurrentModule.GetProperty('iconLogoAlign');
            iconAlign = iconAlign == '' ? 'left' : iconAlign;

            if (LOUISE.Application.IsRtl) {
                if (iconAlign === 'right') {
                    iconAlign = 'left';
                }
                else if (iconAlign === 'left') {
                    iconAlign = 'right';
                }
            }

            var iconImage = new Image();

            iconImage.onload = function () {
                $('#icon-area').css('background-image', 'url("system/iconLogoFiles/' + iconFile + '")');
            };
            iconImage.onerror = function () {
                $('#icon-area').css('background-image', 'url("Skin/Editor-files/system/iconLogoFiles/' + iconFile + '")');
            };


            $('#icon-area').css({
                'display': 'block',
                'background-repeat': 'no-repeat',
                'background-position': 'top ' + iconAlign
            });

            iconImage.src = 'system/iconLogoFiles/' + iconFile;

        }
        else {
            $('#icon-area').css('display', 'none');
        }
    }

    //////////////////////
    //
    //  Overrides
    //
    /////////////////////

    // Sets up the initial filter menu after lang select but before course start
    LOUISE.Application.StartCourse = (function (base) {

        function extendsStartCourse() {

            // If filters are provided by the print query string then add the filters to the initial list and start the course, skip lang menu since we are printing
            if (LOUISE.Environment.PrintMode) {
                _setBrandFromPrintFilter(base);
            }

            else if (!LOUISE.Environment.MultiScreen || (!LOUISE.Environment.IsLectureScreen && LOUISE.Environment.MultiScreen)) {
                _renderSkinMenu(base);
            }
            else if (_userSelectSkin) {
                base();
            }
        }

        return extendsStartCourse;

    })(LOUISE.Application.StartCourse);

    // We need to prevent the trainer text are in the trainer screen to show during skin menu
    LOUISE.Layout.DefaultScreens = (function (base) {

        function extendsDefaultScreens() {
            if (!_userSelectSkin) {
                var selLang = LOUISE.Application.SelectedLanguage;
                LOUISE.Application.SelectedLanguage = null;
                base();
                LOUISE.Application.SelectedLanguage = selLang;
            }
            else {
                base();
            }
        }

        return extendsDefaultScreens;

    })(LOUISE.Layout.DefaultScreens);

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



        //////////////////////
        //
        //  Public functions 
        //
        /////////////////////

        SetSelectedSkin: function (i) {
            _selectedSkin = _skinVariants[i];
            _userSelectSkin = true;
        }


    };

})();

