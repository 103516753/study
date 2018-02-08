function setCookie(name, value, expires, path, domain) {

	var sCookie = name + '=' + encodeURIComponent(value);
	if(expires) {
		var oDate = new Date();

		oDate.setDate(oDate.getDate() + expires);

		sCookie += ';expires=' + oDate;
	}


	if(path) {
		sCookie += ';path=' + path;
	}

	if(domain) {
		sCookie += ';domain=' + domain;
	}

	document.cookie = sCookie;
}