var rowCount = document.querySelectorAll("#removeRowButton");
for (var i=0; i<rowCount.length; i++) {
    rowCount[i].onclick = function() {
        deleteRow(this);
        //console.log(this.getAttribute("data-donation"));
    }
}

document.addEventListener('DOMContentLoaded', function() {
   console.log("Finito!!");
   var rowCount = document.querySelectorAll("#removeRowButton");
   for (var i=0; i<rowCount.length; i++) {
    rowCount[i].onclick = function() {
        deleteRow(this);
        //console.log(this.getAttribute("data-donation"));
    }
}
}, false);







document.getElementById('removeAllData').onclick = function(){
    removeAllData();
}


function deleteRow(rowId) {
	console.log("Klick!");
	var table = document.getElementById("rekotable");
	console.log(rowId.parentElement.parentElement.rowIndex);
	
	console.log(rowId.getAttribute("data-id"));
	table.deleteRow(rowId.parentElement.parentElement.rowIndex);
	chrome.storage.local.remove(rowId.getAttribute("data-id"));
	
}