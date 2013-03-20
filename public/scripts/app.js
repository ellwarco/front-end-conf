// Generated by CoffeeScript 1.6.1
(function() {

  (function($) {
    return $.fn.fitText = function(kompressor, options) {
      var compressor, settings;
      compressor = kompressor || 1;
      settings = $.extend({
        minFontSize: Number.NEGATIVE_INFINITY,
        maxFontSize: Number.POSITIVE_INFINITY
      }, options);
      return this.each(function() {
        var $this, resizer;
        $this = $(this);
        resizer = function() {
          return $this.css("font-size", Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        };
        resizer();
        return $(window).on("resize", resizer);
      });
    };
  })(jQuery);

  (function($) {
    "use strict";    return $.fn.fitVids = function(options) {
      var div, ref, settings;
      settings = {
        customSelector: null
      };
      div = document.createElement("div");
      ref = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
      div.className = "fit-vids-style";
      div.innerHTML = "&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
      ref.parentNode.insertBefore(div, ref);
      if (options) {
        $.extend(settings, options);
      }
      return this.each(function() {
        var $allVideos, selectors;
        selectors = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.youtube-nocookie.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
        if (settings.customSelector) {
          selectors.push(settings.customSelector);
        }
        $allVideos = $(this).find(selectors.join(","));
        return $allVideos.each(function() {
          var $this, aspectRatio, height, videoID, width;
          $this = $(this);
          if (this.tagName.toLowerCase() === "embed" && $this.parent("object").length || $this.parent(".fluid-width-video-wrapper").length) {
            return;
          }
          height = (this.tagName.toLowerCase() === "object" || ($this.attr("height") && !isNaN(parseInt($this.attr("height"), 10))) ? parseInt($this.attr("height"), 10) : $this.height());
          width = (!isNaN(parseInt($this.attr("width"), 10)) ? parseInt($this.attr("width"), 10) : $this.width());
          aspectRatio = height / width;
          if (!$this.attr("id")) {
            videoID = "fitvid" + Math.floor(Math.random() * 999999);
            $this.attr("id", videoID);
          }
          $this.wrap("<div class=\"fluid-width-video-wrapper\"></div>").parent(".fluid-width-video-wrapper").css("padding-top", (aspectRatio * 100) + "%");
          return $this.removeAttr("height").removeAttr("width");
        });
      });
    };
  })(jQuery);

  window.FE = {
    fit: function() {
      $(".fit-03").fitText(0.3);
      $(".fit-045").fitText(0.45);
      $(".fit-06").fitText(0.6);
      $(".fit-07").fitText(0.7);
      $(".fit-08").fitText(0.8);
      $(".fit-09").fitText(0.9);
      $(".fit-009").fitText(0.09);
      $(".fit-11").fitText(1.1);
      $(".fit-16").fitText(1.6);
      $(".fit-23").fitText(2.3);
      $(".fit-25").fitText(2.5);
      return $(".fit-4").fitText(4);
    },
    swap: function() {
      return $(".stage-character").click(function() {
        $(".stage-character, .stage-info").removeClass("is--active");
        $(this).addClass("is--active");
        return $(this).next("p").addClass("is--active");
      });
    },
    navToggle: function() {
      return $(".nav--trigger, nav a").click(function() {
        return $(".nav--toggle").toggleClass("is--active");
      });
    },
    tylerPatch: function() {
      return $(".attendee-website a:not([href^=\"http://\"]):not([href^=\"https://\"])").each(function() {
        return $(this).attr("href", "http://" + $(this).attr("href"));
      });
    }
  };

  jQuery(function($) {
    FE.fit();
    FE.swap();
    FE.navToggle();
    FE.tylerPatch();
    return $(".video-wrapper").fitVids();
  });

}).call(this);
