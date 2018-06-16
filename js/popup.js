document.getElementById('addbutton').onclick = function(){
    addButton();
	chrome.tabs.executeScript({
		file: `js/addButtonsToFacebook.js`
	});
}
