dial_number = function(number) {
	var selection = number.selectionText;
	var extension = null;
	var password = null;
	chrome.storage.sync.get([
		"extension",
		"password"
	], function(items) {
	  	extension = items.extension;
	  	password = items.password;
	});
	jQuery.ajax({
		type: "POST",
		url: "http://localhost/workspace/my_projects/chrome_extensions/dial_it/functions.php",
		data: { selected_text: selection, extension: extension, password: password},
		success: function(data) {
			//TODO: do something here
		}
	});
};

//TODO: check why created twice? bug?
var cm = chrome.contextMenus.create({
	title: "dial", // should make this localized
	contexts:["selection"],
	onclick: dial_number
});
