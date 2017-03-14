setTimeout(function () {hideMyObj1()},100);
setTimeout(function() {hideMyObj2()},100);
function hideMyObj1() {
	var object = document.getElementById('lga');
    if(object){
		object.style.height = "0px";
		object.style.visibility = 'hidden';
	}
}
function hideMyObj2() {
	var object = document.getElementById('f');
    if(object){
		object.style.height = "0px";
		object.style.visibility = 'hidden';
	}
}
