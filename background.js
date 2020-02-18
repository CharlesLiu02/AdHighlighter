

 /*chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
   chrome.tabs.executeScript({
                file: 'content.js' 
            })
   return true;
});

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, chrome.tabs.executeScript({
                file: 'content.js' 
            }), function(response) {
    console.log('works');
  });
});
*/

/*chrome.runtime.onMessage.addListener(
    function(message, callback) {
        if (message == 'runContentScript') {
            chrome.tabs.executeScript({
                file: 'content.js' 
            })
        
        return true;
        console.log('y')
        }
    })
/*
chrome.runtime.onMessage.addListener(function(response,sender, sendResponse) {
	console.log(response)
	alert('a')
});

chrome.runtime.sendMessage({
    msg: "something_completed", 
    data: {
        subject: "Loading",
        content: "Just completed!"
    }
})

/*background.js -> popup.js 
  Create listener for popup.js 
  Sendmessage from background.js 
  executeScript from popup.js in the if statement */

/*popup.js -> background.js 
  SendMessage (var enabled) from popup.js
  Create listener for background.js that sends the message to content.js*/

