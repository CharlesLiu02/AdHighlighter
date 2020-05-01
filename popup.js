var numberOfAds;
//Listener that gets the number of ads on a search result page from content.js
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        numberOfAds = request.numberAds;
        check = request.message;
        return true;
    }
)

var obj = {}
/*updateLabel() is used to update the value of the button (enabled||disable)
Additionally, is used to send message to content.js to toggle highlight on||off */
function updateLabel() {
    
 if(obj != undefined) {
    console.log('first_outside')
    chrome.storage.sync.get('enabled', function(items){
    enabled = items.enabled
    console.log(enabled)
    console.log('first')


    if (!enabled) {
        console.log('second_outside')
        document.getElementById('toggle_button').value = "Disable"
        foo = true;
       
      
    } else {
console.log('third_outside')
        document.getElementById('toggle_button').value = "Enable"
        foo = false;
        
      
    }


    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: foo}),
            function () {
                console.log('message sent')
            }
    });
})
}
}
var enabled;
var foo;
var check;
/*Onclick event for when user clicks on popup button
Changes button display of enable||disable, 
sends message to content.js to toggle highlighting on||off, */
document.getElementById('toggle_button').onclick = function () {
    if(obj != undefined) {
    console.log('first_outside')
    chrome.storage.sync.get('enabled', function(items){
    enabled = items.enabled
    console.log(enabled)
    console.log('first')


    if (enabled) {
        console.log('second_outside')
        document.getElementById('toggle_button').value = "Disable"
        foo = true;
        chrome.storage.sync.set({enabled: false}, function() {
               
               console.log('second')
})
       
       
    } else {
console.log('third_outside') 
        document.getElementById('toggle_button').value = "Enable"
        foo = false;
        
      chrome.storage.sync.set({enabled: true}, function() {
               
                console.log('third')
               
})
    }


    

    
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: foo}),
            function () {
                console.log('message sent')
            }
    });
    chrome.tabs.executeScript({file: 'content.js'})
})
}
};
updateLabel()
/*updateLabel()
     enabled is undefined so toggle_button.value = "Enable" */
   
 
   
      
  