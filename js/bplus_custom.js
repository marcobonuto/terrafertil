"use strict";

jQuery(document).ready(function($) {
    jQuery(function() {
        jQuery('.portfolio-items-wrapper .portfolio-items-single').each(function() {
            jQuery(this).hoverdir();
        });
    });

    $(".animsition").animsition({

        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay: false,

        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'
    });



    if (jQuery(".bplus-isotope-wrapper").length > 0) {

        jQuery(function() {
            var container = jQuery(".bplus-isotope-wrapper");
            container.isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows",
                transitionDuration: "0.7s"
            });

            var optionSets = jQuery(".option-set"),
                optionLinks = optionSets.find("a");

            optionLinks.on("click", function() {
                var $this = jQuery(this);

                if ($this.hasClass("selected")) {
                    return false;
                }
                var optionSet = $this.parents(".option-set");
                optionSet.find(".selected").removeClass("selected");
                $this.addClass("selected");

                var options = {},
                    key = optionSet.attr("data-option-key"),
                    value = $this.attr("data-option-value");

                value = value === "false" ? false : value;
                options[key] = value;
                if (key === "layoutMode" && typeof changeLayoutMode === "function") {

                    changeLayoutMode($this, options)
                } else {
                    // otherwise, apply new options
                    container.isotope(options);
                }

                return false;
            });


        });

    }

    if (jQuery(".bplus-isotope-wrapper-masonry").length > 0) {

        jQuery(function() {
            var container = jQuery(".bplus-isotope-wrapper-masonry");
            container.isotope({
                itemSelector: ".isotope-item",
                layoutMode: "masonry",
                transitionDuration: "0.7s"
            });
            var optionSets = jQuery(".option-set"),
                optionLinks = optionSets.find("a");

            optionLinks.on("click", function() {
                var $this = jQuery(this);

                if ($this.hasClass("selected")) {
                    return false;
                }
                var optionSet = $this.parents(".option-set");
                optionSet.find(".selected").removeClass("selected");
                $this.addClass("selected");

                var options = {},
                    key = optionSet.attr("data-option-key"),
                    value = $this.attr("data-option-value");

                value = value === "false" ? false : value;
                options[key] = value;
                if (key === "layoutMode" && typeof changeLayoutMode === "function") {

                    changeLayoutMode($this, options)
                } else {
                    // otherwise, apply new options
                    container.isotope(options);
                }

                return false;
            });


        });

    }


});


(function($, sr) {

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function(func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap)
                        func.apply(obj, args);
                    timeout = null;
                };

                if (timeout)
                    clearTimeout(timeout);
                else if (execAsap)
                    func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        }
        // smartresize 
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };

})(jQuery, 'smartresize');


/* Post filter START */



jQuery(window).load(function() {
    if (jQuery(".bplus-isotope-wrapper").length > 0) {
        var container = jQuery(".bplus-isotope-wrapper");
        container.isotope({
            itemSelector: ".isotope-item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s"
        });

        setTimeout(function() {
            var container = jQuery(".bplus-isotope-wrapper");
            container.isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows",
                transitionDuration: "0.7s"
            });
        }, 700);

        var currentItemWidth = jQuery(".portfolio-items-single").innerWidth();
        if (currentItemWidth < 200) {
            jQuery(".bplus-isotope-wrapper").addClass("portfolio-items-smaller");
        } else {
            jQuery(".bplus-isotope-wrapper").removeClass("portfolio-items-smaller");
        }
    }

    if (jQuery(".bplus-isotope-wrapper-masonry").length > 0) {
        var container = jQuery(".bplus-isotope-wrapper-masonry");
        container.isotope({
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
            transitionDuration: "0.7s"
        });

        setTimeout(function() {
            var container = jQuery(".bplus-isotope-wrapper-masonry");
            container.isotope({
                itemSelector: ".isotope-item",
                layoutMode: "masonry",
                transitionDuration: "0.7s"
            });
        }, 700);
    }

});




jQuery(window).smartresize(function() {

    if (jQuery(".bplus-isotope-wrapper").length > 0) {
        var container = jQuery(".bplus-isotope-wrapper");
        container.isotope({
            itemSelector: ".isotope-item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s"
        });

    }

    if (jQuery(".bplus-isotope-wrapper-masonry").length > 0) {

        var container = jQuery(".bplus-isotope-wrapper-masonry");
        container.isotope({
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
            transitionDuration: "0.7s"
        });

    }

});