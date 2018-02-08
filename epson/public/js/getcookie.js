function getCookie(name){

	var sCookie = document.cookie;
	var oCookie = sCookie.split('; ');

	for(i = 0; i < oCookie.length; i++){

		var	oTemp = oCookie[i].split('=');
		if(oTemp[0] == name){
			return decodeURIComponent(oTemp[1])
		}
	}

}