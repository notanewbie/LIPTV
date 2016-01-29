function loadFile(fileName) {
	var txtFile;
        if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  txtFile = new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  txtFile = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	txtFile.open("GET",fileName,false);
	txtFile.send();
	var txtDoc=txtFile.responseText;
	return txtDoc
}