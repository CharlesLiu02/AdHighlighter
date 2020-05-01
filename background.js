//Listener that messages content.js whether to toggle highlighing on||off whenever a new query is entered or page is refreshed
var foo;
chrome.webNavigation.onCompleted.addListener(function() {

    console.log('first_outside')
    chrome.storage.sync.get('enabled', function(items){
    enabled = items.enabled
    console.log(enabled)
    console.log('first')


    if (!enabled) {
        console.log('second_outside')
        foo = true;
       
      
    } else {
console.log('third_outside')
        foo = false;
        
      
    }


    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: foo}),
            function () {
                console.log('message sent')
            }
    });
})

    })



