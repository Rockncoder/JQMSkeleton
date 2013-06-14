var RocknCoder = RocknCoder || {};

(function () {
  "use strict";

  RocknCoder.Pages = RocknCoder.Pages || {};
  // put the page events into one string
  var Events = "pagebeforeshow pageshow pagechange pagebeforehide pagehide",
    DocEvents = "pagebeforechange orientationchange",
    Kernel = function (event, data) {
      var that = this,
        eventType = event.type,
        pageName = $(this).attr("data-rnc-jspage");
      if (RocknCoder && RocknCoder.Pages && pageName && RocknCoder.Pages[pageName] && RocknCoder.Pages[pageName][eventType]) {
        RocknCoder.Pages[pageName][eventType].call(that, event, data);
      }
    },
    hookDocEvents = function (event, data) {
      // find the active page
      var activePage = $.mobile.activePage || $("div[data-rnc-jspage]").eq(0);
      Kernel.call(activePage, event, data);
    };

  // anonymous function which binds to the page's events
  (function () {
    $(document).on(DocEvents, function (event, data) {
      hookDocEvents(event, data);
    });

    $("div[data-rnc-jspage]").on(Events, Kernel);
  }());

  // anonymous function which binds to the document's pageload event
  (function () {
    $(document).bind(
      'pageload',
      function () {
        $(document)
          // to make sure we aren't double hooking events clear them all
          .off(DocEvents)
          .on(DocEvents, function (event, data) {
            hookDocEvents(event, data);
          });

        $("div[data-rnc-jspage]")
          // to make sure we aren't double hooking events clear them all
          .off(Events)
          // then hook them all  (the newly loaded page is in DOM at this point)
          .on(Events, Kernel);
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