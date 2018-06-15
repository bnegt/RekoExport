function save_options() {
  var yourName = document.getElementById('yourName').value;
  var prefix = document.getElementById('prefix').value;
  chrome.storage.local.set({
    yourName: yourName,
    prefix: prefix
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    yourname: 'red',
    prefix: 'sko'
  }, function(items) {
    document.getElementById('yourName').value = "Mitt namn wooho";
    document.getElementById('prefix').value = "SKA,SKOVDE,BRA";
  });
}

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('save').addEventListener('click',
    save_options);function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    yourName: 'kakalol',
    prefix: 'prefix'
  }, function(items) {
    document.getElementById('yourName').value = items.yourName;
	console.log(items.yourName)
    document.getElementById('prefix').value = items.prefix;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);