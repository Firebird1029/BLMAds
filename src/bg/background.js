// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);
	sendResponse();
});

chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		// console.log(details)
		return { cancel: true };
	},
	{
		urls: [
			"*://*.doubleclick.net/*",
			"*://*.googleadservices.com/*",
			// "*://*.googlesyndication.com/*",
			"*://*.moat.com/*",
			"*://*.3lift.com/*",
			"*://*.adnxs.com/*",
			"*://*.adobedtm.com/*",
			"*://*.advertising.com/*",
			"*://*.amazon-adsystem.com/*",
			"*://*.c.amazon-adsystem.com/*",
			"*://*.casalemedia.com/*",
			"*://*.clarium.global.ssl.fastly.net/*",
			"*://*.demdex.net/*",
			"*://*.imasdk.googleapis.com/*",
			"*://*.newrelic.com/*"
		]
	},
	["blocking"]
);
