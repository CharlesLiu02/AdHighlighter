//Listens for messages from background.js or popup.js which will toggle highlighting on||off
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.status);
        foo = request.status;
        highlighter(foo)
        return true;
    });
//highlighting method that scans search results for ads and will highlight depending on response from listener
function highlighter(foo) {

    var highlight = document.getElementsByClassName('ads-visurl');
    if (foo) {
        for (var i = 0; i < highlight.length; i++) {
            highlight[i].style.background = '#ccff00';
            highlight[i].getElementsByTagName('span')[0].style.background = '#ccff00';
        }

    } else {
        for (var i = 0; i < highlight.length; i++) {
            highlight[i].style.background = 'none';
            highlight[i].getElementsByTagName('span')[0].style.background = 'none';
        }

    }
}

//counts number of ads on a search result page 
function countAds(foo) {
    if (foo) {
        var numberAds = document.getElementsByClassName('ads-visurl').length;
        chrome.runtime.sendMessage({greeting: "countAds", numberAds: numberAds}, function (response) {
            console.log("message sent to popup");
        });
    }
}


var check;
var foo;
//called when you manually reload the extension 
countAds(foo);

//class="pagelet j_4gdes6mqo"