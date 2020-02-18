function updateLabel() {
		 if(enabled == true) {
			document.getElementById('toggle_button').value = "Disable"
			foo = false;
		}
		else {
			document.getElementById('toggle_button').value = "Enable"
			foo = true;
		}
	}

	var enabled;
	var foo;
	var check = true;
	document.getElementById('toggle_button').onclick = function () {
		if(!enabled) {
			enabled = true;
		}
		else {
			enabled = false;
		}

		chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
        // WAY 1
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", status: foo, initital: check}), 
        function() {
        console.log('message sent')}
    });
		chrome.tabs.executeScript({file: 'content.js'})

		updateLabel();

	};


	   
   /*updateLabel()  
   	 enabled is undefined so toggle_button.value = "Enable" */
   
 
   
      
  