/**
 * @package    DD_fromSCRT_Tmpl
 *
 * @author     HR IT-Solutions Florian Häusler <info@hr-it-solutions.com>
 * @copyright  Copyright (C) 2017 - 2017 Didldu e.K. | HR IT-Solutions
 * @license    http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 **/

; var DD_fromSCRT_Tmpl = function () {

    // Configuration
    var config = {
        CSS:{
            setup: {
                containerwidth: 1600
            },
            classes:{
                hover:'hover',
                active:'current',
                jsEnabled:'js'
            },
            ids:{
                container:'maincontainer'
            }
        }
    },

    browser = {

        // Firefox 1.0+
        isFirefox: function () {
            return typeof InstallTrigger !== 'undefined';
        },

        // Safari 3.0+ "[object HTMLElementConstructor]"
        isSafari: function () {
          return /constructor/i.test(window.HTMLElement) ||
              (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        },

        // Chrome 1+
        isChrome: function () {
            return !!window.chrome && !!window.chrome.webstore;
        },

        // Opera 8.0+
        isOpera: function () {
            return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        },

        // Blink engine detection
        isBlink: function () {
            return (isChrome || isOpera) && !!window.CSS;
        },

        // Edge 20+
        isEDGE: function() {
            return !isIE && !!window.StyleMedia;
        },

        // isIE
        isIe: function () {
            return navigator.appVersion.indexOf("MSIE") != -1;
        },

        navigator: navigator.appVersion,
        getVersion: function() {
            var version = 999; // we assume a sane browser
            if (navigator.appVersion.indexOf("MSIE") != -1)
            // bah, IE again, lets downgrade version number
                version = parseFloat(navigator.appVersion.split("MSIE")[1]);
            return version;
        }
        // browser. Adapted from Sam Jones
        // https://stackoverflow.com/questions/19562207/jquery-detect-browser-ie9-and-below-and-throw-up-a-modal-to-upgrade#answer-19562445
    };

    function init(){

        // Examples
        if (browser.isIe() && browser.getVersion() <= 9) {
            // todo: IE Version below 9 rules
        }
        if (browser.isSafari()) {
            // todo: Safari rules
        }

    }

    function init_responsive() {

        var setCSS = function () {

            // (min-width: 1280px)
            if($(window).width() >= 1280) {
                // todo: css rules
            }

            // (min-width: 1024px) and (max-width: 1280px)
            if($(window).width() >=  1024 && $(window).width() <= 1280 ) {
                // todo: css rules
            }

            // (min-width: 960px) and (max-width: 960px)
            if($(window).width() >=  960 && $(window).width() <= 1024 ) {
                // todo: css rules
            }

            // (min-width: 768px) and (max-width: 960px)
            if($(window).width() >=  768 && $(window).width() <= 960 ) {
                // todo: css rules
            }

            // (min-width: 480px) and (max-width: 768px)
            if($(window).width() >=  480 && $(window).width() <= 768 ) {
                // todo: css rules
            }

            // (min-width: 320px) and (max-width: 480px)
            if($(window).width() >=  320 && $(window).width() <=  480) {
                // todo: css rules
            }

            // (max-width: 320px)
            if($(window).width() <=  320) {
                // todo: css rules
            }

        };


        $(window).smartresize(function(){
            setCSS();
        })

    }

    // more methods

    // init public method
    return {
        init:init,
        init_responsive: init_responsive
    };

};

/* Set cookie (global) */
function DD_SetCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

(function($,sr){
    // http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function(func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 50);
        };
    };

    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

(function($) {
    $(function()
    {
        DD_fromSCRT_Tmpl.init();
        // DD_fromSCRT_Tmpl.init_responsive();
    });
})(jQuery);