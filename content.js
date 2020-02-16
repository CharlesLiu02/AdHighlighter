function highlighter() {
	
	var highlight = document.getElementsByClassName('ads-visurl');
	if(highlight != null)
	{
		for(var i = 0; i < highlight.length; i++) {
			highlight[i].style.background = '#ccff00';
			highlight[i].getElementsByTagName('span')[0].style.background = '#ccff00';
		}
		
	}

	else {
		
	}
}


