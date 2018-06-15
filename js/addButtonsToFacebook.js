var UFIData;
var allDocuments = document.getElementsByClassName("UFIList");

for(var  i=0,max=allDocuments.length;i < max; i++) {
  var button = document.createElement("button");
  button.onclick = function() {

	UFIData = this.parentElement;
	var foobar = this.parentElement.childNodes;

	var comments = this.parentElement.getElementsByClassName("UFICommentContent");
	
	console.log(comments.length);
	
	
	var UFIName;
		
	for(var i = 0; i < comments.length;i++) {
		//console.log(comments[i]);
		UFIName = comments[i].getElementsByClassName("UFICommentActorName")[0].innerText;
		
		UFIData = comments[i].getElementsByClassName("UFICommentBody")[0].innerText;
		//console.log(comments[i]);
		var key = "Foo" + i;
		//console.log(key);
		
		var testStorage = [UFIName, "Kaka", UFIData];
		
		chrome.storage.local.set({[key]: testStorage}, function() {
			console.log('Value is set to ' + testStorage);
		});
	}
    this.parentElement.removeChild(this);
	chrome.browserAction.setPopup({popup: "new.html"});
  };
  var buttonText = document.createTextNode("Export comments in this thread");
  document.getElementsByClassName("UFIList")[i].append(button);
  button.appendChild(buttonText);
}

function storeUserPrefs(UFIData) {
    //var key='myKey', testPrefs = {'val': UFIData};
    //chrome.storage.local.set({[key]: testPrefs}, function() {
    //  console.log('Saved', key, testPrefs);
    //});
	
	chrome.storage.local.set({'myKey': UFIData}, function() {
		console.log('Value is set to ' + UFIData);
    });
	
	chrome.storage.local.set({UFIData}, function() {
		console.log('Value is set to ' + UFIData);
    });
	
	console.log('Karamba');

}