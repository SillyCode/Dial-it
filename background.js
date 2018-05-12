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

	//TODO: check if pass/user are set
	//Dial the number
	$.ajax({
		type: "POST",
		url: "http://localhost/workspace/my_projects/chrome_extensions/dial_it/functions.php?dial",
		data: { number: selection },
		success: function(data) {
			alert("Dialed it");
		}
	});
};

var cm = chrome.contextMenus.create({
	title: "dial", // should make this localized
	contexts:["selection"],
	onclick: dial_number
});
