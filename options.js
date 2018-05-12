function save_options() {
	var extension = document.getElementById('extension').value;
	var password = document.getElementById('password').value;
	chrome.storage.sync.set({
		extension: extension,
		password: password
	}, function() {
		var response = document.getElementById('response');
		response.textContent = 'Settings were set';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});

	//Save to file
	$.ajax({
		type: "POST",
		url: "http://localhost/workspace/my_projects/chrome_extensions/dial_it/functions.php?store",
		data: { extension: extension, password: password},
		success: function(data) {
			alert("Info saved"); ////TODO: do something here. Also localize this

		}
	});
}

function restore_options() {
	chrome.storage.sync.get([
		"extension",
		"password"
	], function(items) {
	  	document.getElementById('extension').value = items.extension;
	  	document.getElementById('password').value = items.password;
	});
}

document.getElementById('save').addEventListener("click", save_options);
document.addEventListener('DOMContentLoaded', restore_options);
