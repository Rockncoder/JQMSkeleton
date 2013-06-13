var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};
  // put the page events into one string
  var Events = "pagebeforeshow pageshow pagebeforechange pagechange pagebeforehide pagehide",
  // the kernel remains unchanged
    Kernel = function (event) {
      var that = this,
        eventType = event.type,
        pageName = $(this).attr("data-rnc-jspage");
      if (RocknCoder && RocknCoder.Pages && pageName && RocknCoder.Pages[pageName] && RocknCoder.Pages[pageName][eventType]) {
        RocknCoder.Pages[pageName][eventType].call(that);
      }
    },
    hookEvents = function (event) {
      // find the active page
      var activePage = $.mobile.activePage || $("div[data-rnc-jspage]").eq(0);
      Kernel.call(activePage, event);
    };

  // anonymous function which binds to the page's events
  (function () {
    $(document).on(Events, function (event) {
      hookEvents(event);
    });
  }());

  // anonymous function which binds to the document's pageload event
  (function () {
    $(document).bind(
      'pageload',
      function (event, obj) {
        $(document)
          // to make sure we aren't double hooking events clear them all
          .off(Events)
          .on(Events, function (event) {
            hookEvents(event);
          });
      }
    );
  }());

  // size the content area
  RocknCoder.Dimensions = (function () {
    var get = function () {
      var isFirstPass = false,
        isIPhone = (/iphone/gi).test(navigator.appVersion),
        width = $(window).width(),
        height = $(window).height() + (isIPhone ? 60 : 0),
        hHeight = $('header').outerHeight(),
        fHeight = $('footer').outerHeight();
      return {
        width: width,
        height: height - hHeight - fHeight
      };
    };
    return {
      get: get
    };
  }());
}());