
 //chrome.storage.local.clear();
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

function reverseObject(object) {
    var newObject = {};
    var keys = [];
    for (var key in object) {
		keys.push(key);
    }
    for (var i = keys.length - 1; i >= 0; i--) {

    var value = object[keys[i]];
      newObject[keys[i]]= value;
    }       

    return newObject;
}


chrome.storage.local.get(null, function(items) {
	var table = document.getElementById("rekotable");
   var rowId = "0";
   //items = reverseObject(items);
   for (key in items) {
	   if(!key.search("Foo")) {
		   console.log(key);
		
		//console.log(newItems);
		

		//console.log(items[key][0]);
		   if(items[key][0] != items["yourName"]) {

				console.log("Namn: " + items[key][0]);
				console.log("Kommentar" + items[key][2]);
				table = document.getElementById("rekotable");
				//console.log(table);
				var row = table.insertRow(0);
				row.id = rowId;
				var cell1 = row.insertCell(0);
				
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				cell1.innerHTML = items[key][0];
				cell1.id = "name";
				cell2.innerHTML = items[key][2];
				cell2.id = "comment";
				//console.log(items[key][2].substring(items[key][2].search("SKÖ"),items[key][2].search("SKÖ")+5));
				cell3.innerHTML = "ORDER ID";
				cell3.id = "orderId"
				cell4.innerHTML = '<button id="removeRowButton" data-id="'+key+'">Remove this row</button>';
				cell4.id = "button";
				var rowCount = document.querySelectorAll("#removeRowButton");
				for (var i=0; i<rowCount.length; i++) {
					rowCount[i].onclick = function() {
						deleteRow(this);
					}
				}
				

		   } else {
				//console.log(table.rows.length);
				var searchPrefix = items["prefix"].split(",");
				searchPrefix.forEach(function(element) {
					var searchString = items[key][2].substring(items[key][2].search(element));
					searchString  = searchString.substring(0,searchString.search(" "));
					//console.log(searchString+" - "+element);
					
					if(table.rows.length > 0) {
						if(searchString.search(element) > -1) {

							cell3.innerHTML = items[key][2].substring(items[key][2].search("SKA"),items[key][2].search("SKA")+6);
						}
						
						//if(items[key][2].substring(items[key][2].search(element))) {
							
							//cell3.innerHTML = items[key][2].substring(items[key][2].search("SKA"),items[key][2].search("SKA")+6);
							
						//}
					}

				});

		   }
		   rowId++;
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
function removeAllData() {
	//alert("Data!");
	chrome.storage.local.clear();
	window.location.reload();
}




