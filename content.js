setTimeout(function () {hideMyLogo()},100);
setTimeout(function() {hideMySearchBar()},100);
function hideMyLogo() {
	var object = document.getElementById('lga');
    	if(object){
		object.style.height = "0px";
		object.style.visibility = 'hidden';
	}
}
function hideMySearchBar() {
	var object = document.getElementById('f');
    	if(object){
		object.style.height = "0px";
		object.style.visibility = 'hidden';
	}
}
