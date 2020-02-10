chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("blocking:", details.url);
        if(chrome.extension.getBackgroundPage().enabled)
        	return {cancel: true };
    	else{
    		return {cancel: false};
    	}
        {passive: true}
    },
    {urls: blocked_domains},
    ["blocking"]
);