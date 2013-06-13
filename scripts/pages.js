
var RocknCoder = RocknCoder || {};

(function () {
	"use strict";

	RocknCoder.Pages = RocknCoder.Pages || {};

	RocknCoder.Pages.page1 = (function () {
		return {
      pagebeforechange: function(){
        console.log("Hello from page before change #1");
      },
			pageshow: function () {
      },
			pagehide: function () {
      }
		};
	}());

	RocknCoder.Pages.page2 = (function () {
		return {
      pagebeforechange: function(){
        console.log("Hello from page before change #2");
      },
			pageshow: function () {
      },
			pagehide: function () {
      }
		};
	}());
}());

