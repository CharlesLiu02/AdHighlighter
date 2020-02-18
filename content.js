
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.status);
    foo = request.status;
    check = request.initial;
	return true;
  });

function highlighter(foo) {
	
	var highlight = document.getElementsByClassName('ads-visurl');
	if(foo)
	{
		for(var i = 0; i < highlight.length; i++) {
			highlight[i].style.background = '#ccff00';
			highlight[i].getElementsByTagName('span')[0].style.background = '#ccff00';
		}
		
	}

	else {
		for(var i = 0; i < highlight.length; i++) {
			highlight[i].style.background = 'none';
			highlight[i].getElementsByTagName('span')[0].style.background = 'none';
		}
		
	}
}
var check;
var foo;
if(check)
highlighter(foo);
