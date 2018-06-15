document.getElementById('addbutton').onclick = function(){
    addButton();
	console.log("lol noob2");
	chrome.tabs.executeScript({
		file: `js/addButtonsToFacebook.js`
	});
}
