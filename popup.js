var numberOfAds;

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        numberOfAds = request.numberAds;
    }
)

function updateLabel() {
    if (enabled == true) {
        document.getElementById('toggle_button').value = "Enable"
        foo = false;
    } else {
        document.getElementById('toggle_button').value = "Disable"
        foo = true;
    }
}

var enabled;
var foo;
document.getElementById('toggle_button').onclick = function () {
    if (!enabled) {
        enabled = true;
    } else {
        enabled = false;
    }

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        // WAY 1
        chrome.tabs.sendMessage(tabs[0].id, {status: foo}),
            function () {
                console.log('message sent')
            }
    });
    chrome.tabs.executeScript({file: 'content.js'})

    updateLabel();
};
updateLabel();
/*updateLabel()
     enabled is undefined so toggle_button.value = "Enable" */
   
 
   
      
  