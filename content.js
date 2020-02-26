chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.status);
        foo = request.status;
        highlighter(foo)
        return true;
    });

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

function countAds(foo) {;
    if (foo) {
        var numberAds = document.getElementsByClassName('ads-visurl').length;
        chrome.runtime.sendMessage({greeting: "countAds", numberAds: numberAds}, function (response) {
            console.log("message sent to popup");
        });
    }
}

var check;
var foo;
// if (check) {
if(check == null) {
    highlighter(true);
}
else{
    check = true;
}
    countAds(foo);


// }
