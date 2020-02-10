	function highlighter() {
	var highlight = document.getElementsByClassName('ads-visurl');
	var i;
	if(highlight != null) {
		for(i = 0; i < highlight.length; i++) {
			highlight[i].style.background = '#ccff00';
			highlight[i].getElementsByTagName('span')[0].style.background = '#ccff00';
	}}
}

	function updateLabel() {
		var enabled = chrome.extension.getBackgroundPage().enabled;
		 if(enabled == true) {
			document.getElementById('toggle_button').value = "Disable"
			highlighter()
		} 
		else {
			document.getElementById('toggle_button').value = "Enable"

		}

	}
	


	document.getElementById('toggle_button').onclick = function () {
		var background = chrome.extension.getBackgroundPage();
		background.enabled = !background.enabled;
		chrome.tabs.reload();
	
		updateLabel();
	};
		
	updateLabel();

	