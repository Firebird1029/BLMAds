chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			$("body").css("background-color", "red");
			$(".adsbygoogle").each((i, el) => {
				$(el).remove();
			});
			$("head").append(
				`<script data-ad-client="ca-pub-8413947106743880" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>`
			);
			// ----------------------------------------------------------
		}
	}, 10);
});
