
/////////////////////////////////////////////////////////////////////
//
//  TYPE: Static class
//  NAME: Settings
//  NAMESPACE: LOUISE
//  
//  SUMMARY
//      This file contains default settings for the applicaiton.
//  
//  PUBLIC FIELDS
//      SHOW_ERRORS
//      DEFAULT_MEDIA_VALIGN
//      DEFAULT_TEXT_VALIGN
//      ALLOW_FREE_NAVIGATION
//      MAX_SCORE
//      PASSING_SCORE
//
//  PUBLIC FUNCTIONS
//      N/A
//
//  DEPENDENCIES
//      N/A
//
//////////////////////////////////////////////////////////////////////

// Ensure that the LOUISE namespace is avaiable
if (LOUISE === null || LOUISE === undefined) { var LOUISE = {}; }

LOUISE.Settings = (function () {

    //////////////////////
    //
    //  Private fields 
    //
    /////////////////////



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

        SHOW_ERRORS: true,
        DEFAULT_MEDIA_VALIGN: 'middle',
        DEFAULT_TEXT_VALIGN: 'middle',
        ALLOW_FREE_NAVIGATION: true,
        MAX_SCORE: 0,
        PASSING_SCORE: 0
    };

})();
