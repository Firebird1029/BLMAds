chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("BLM Ad injection begin");

			// --- Helper Function to load our Google Adsense
			// this function will work cross-browser for loading scripts asynchronously
			// https://stackoverflow.com/questions/7718935/load-scripts-asynchronously#7719185
			function loadScript(src, callback) {
				var s, r, t;
				r = false;
				s = document.createElement("script");
				s.id = "blm-ad-1";
				s.type = "text/javascript";
				s.src = src;
				s.onload = s.onreadystatechange = function () {
					//console.log( this.readyState ); //uncomment this line to see which ready states are called.
					if (!r && (!this.readyState || this.readyState == "complete")) {
						r = true;
						callback();
					}
				};
				t = document.getElementsByTagName("script")[0];
				t.parentNode.insertBefore(s, t);
			}

			// Load our Google Adsense
			loadScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", () => {
				$("#blm-ad-1").attr("data-ad-client", "ca-pub-8413947106743880");
				console.log("BLM Ad injection complete");

				// Replace existing ads
				$(".adsbygoogle").each((i, el) => {
					$(el).replaceWith(`<div>new ad here</div>`);
				});
			});
		}
	}, 10);
});
