
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.storage.local.clear(function() {
		var error = chrome.runtime.lastError;
		if (error) {
			console.error(error);
		}
	});
	chrome.tabs.executeScript({file:"js/addButtonsToFacebook.js"});
});

/*
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("localPage.html") });
});
*/