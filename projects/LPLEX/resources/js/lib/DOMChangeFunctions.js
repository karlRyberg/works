(function ($) {
    var originalHtml = $.fn.html;
    $.fn.html = function (value) {
        if (typeof value != 'undefined' && typeof LOUISE.Skin != 'undefined') {
            if (LOUISE.Skin.ClassName) {
                var jqObj = originalHtml.call(this, value);
                jqObj.find('div, span, ul, li, iframe').addClass(LOUISE.Skin.ClassName);
                return jqObj;
            }
        }
        else {
            return originalHtml.call(this, value);
        }
    };

    var originalAppend = $.fn.append;
    $.fn.append = function (value) {
        if (typeof value != 'undefined' && typeof LOUISE.Skin != 'undefined') {
            if (LOUISE.Skin.ClassName) {
                var jqObj = originalAppend.call(this, value);
                jqObj.find('div, span, ul, li, iframe').addClass(LOUISE.Skin.ClassName);
                return jqObj;
            }
        }
        else {
            return originalAppend.call(this,value);
        }
    };

})(jQuery);