 /*
 chrome.storage.local.get(['myKey', 'val'], function(items) {
      console.log('Settings retrieved', items);
    });
*/	
//chrome.storage.local.get({['myKey': 'val']}, function(result) {
	//console.log('Value currently is ' + result.key);
//});

/*		
chrome.storage.local.get(['Foo0'], function(result) {
	console.log('Value currently is ' + result);
	console.log(result);
	var my_obj_str = JSON.stringify(result);
	
	console.log(result);
	
	

	
});
*/

chrome.storage.local.get(null, function(items) {
   for (key in items) {
	//console.log(items[key][0]);
	   if(items[key][0] == "Bengt Torstensson") {
			console.log("My own comment");
	   } else {
			console.log("Namn: " + items[key][0]);
			console.log("Kommentar" + items[key][2]);
			var table = document.getElementById("rekotable");
			var row = table.insertRow(0);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			cell1.innerHTML = items[key][0];
			cell2.innerHTML = items[key][2];

	   }
   }
   
   //dump(items);
});

chrome.storage.local.get(null, function(items) {
	var allKeys = Object.keys(items);
	var key = 0;
	//console.log(allKeys);

	
	for(var i = 0; i < allKeys.length;i++) {
		//console.log(i);
		key = 'Foo'+i;
		chrome.storage.local.get([key], function(result) {
			//console.log(result[key][0]);
			//console.log("Hejk");
		});
}
});

function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    //alert(out);

    // or, if you wanted to avoid alerts...

    var pre = document.createElement('pre');
	
    pre.innerHTML = out;
	console.log("Out: " + out);
    document.body.appendChild(pre)
}

/*
chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
});

*/



