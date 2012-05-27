
var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};

RocknCoder.Pages.Kernel = function (event) {
	var that = this,
		eventType = event.type,
		pageName = $(this).attr("data-rockncoder-jspage");
	if (RocknCoder && RocknCoder.Pages && pageName && RocknCoder.Pages[pageName] && RocknCoder.Pages[pageName][eventType]) {
		RocknCoder.Pages[pageName][eventType].call(that);
	}
};

RocknCoder.Pages.Events = function () {
	$("div[data-rockncoder-jspage]").on(
		'pagebeforecreate pagecreate pagebeforeload pagebeforeshow pageshow pagebeforechange pagechange pagebeforehide pagehide pageinit',
		RocknCoder.Pages.Kernel).on(
		"pageinit", RocknCoder.hideAddressBar);
} ();

RocknCoder.Pages.page1 = function () {
	var pageinit = function(){
	},
	pageshow = function () {
	},
	pagehide = function () {
	};
	return {
		pageinit: pageinit,
		pageshow: pageshow,
		pagehide: pagehide
	}
}();

RocknCoder.Pages.page2 = function () {
	var pageinit = function(){
		},
		pageshow = function () {
		},
		pagehide = function () {
		};
	return {
		pageinit: pageinit,
		pageshow: pageshow,
		pagehide: pagehide
	}
}();

