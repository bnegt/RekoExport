var UFIData;
var allDocuments = document.getElementsByClassName("UFIList");

for(var  i=0,max=allDocuments.length;i < max; i++) {
  var button = document.createElement("button");
  button.onclick = function() {
    //console.log(this.parentElement);
	UFIData = this.parentElement;
	//console.log(this.parentElement);
	var foobar = this.parentElement.childNodes;
	//console.log(foobar[2].getElementsByClassName("UFIComment"));
	
	//var comments = this.parentElement.getElementsByClassName("UFICommentContentBlock");
	var comments = this.parentElement.getElementsByClassName("UFICommentContent");
	
	//var arr = [].slice.call(foobar[2]);
	//console.log(arr[1]);
	
	//storeUserPrefs(foobar[2].innerText);
	//storeUserPrefs(comments[2].getElementsByClassName("UFICommentBody")[0].innerText);
	//storeUserPrefs(comments[2]);
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