
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
        console.log("page show #1")
      },
			pagehide: function () {
        console.log("page hide #1")
      }
		};
	}());

	RocknCoder.Pages.page2 = (function () {
		return {
      pagebeforechange: function(){
        console.log("Hello from page before change #2");
      },
			pageshow: function () {
        console.log("page show #2")
      },
			pagehide: function () {
        console.log("page hide #2")
      }
		};
	}());
}());

