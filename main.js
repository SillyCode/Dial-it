dial_number = function(number) {
	var selection = number.selectionText;
	if(!isNaN(selection)) {
		alert("We are going to dial: '" + number.selectionText + "'");
	} else {
		alert("not a number");
	}
};

chrome.contextMenus.create({
  title: "dial", // should make this localized
  contexts:["selection"],
  onclick: dial_number
});
