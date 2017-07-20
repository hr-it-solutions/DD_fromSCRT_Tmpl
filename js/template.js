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
            classes:{
                hover:'hover',
                active:'current',
                jsEnabled:'js'
            },
            ids:{
                container:'maincontainer'
            }
        }
    };

    function init(){


    }


    function init_responsive() {

    }

    // more methods

    // init public method
    return {
        init:init,
        init_responsive: init_responsive
    };

};


(function($) {
    $(function()
    {
        DD_fromSCRT_Tmpl.init();
        // DD_fromSCRT_Tmpl.init_responsive();
    });
})(jQuery);