	function updateLabel() {
		var enabled = chrome.extension.getBackgroundPage().enabled;
		 if(enabled == true) {
			document.getElementById('toggle_button').value = "Disable"

		
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
   
   chrome.runtime.onMessage.addListener(
    function(message, callback) {
        chrome.runtime.sendMessage({message: "runContentScript"}, function(response){
   	console.log('works!')
   })
        return true; 
        })
      
    

   

   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
   	chrome.tabs.sendMessage(tabs[0].id, {message: "runContentScript"}, function(response) {
   		console.log('works')
   	})
   })