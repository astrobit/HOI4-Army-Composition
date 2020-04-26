function changeStorageCheck(source)
{
	var elem = document.getElementById(source);
	if (elem.checked)
		localStorage.setItem(source,"true");
	else
		localStorage.setItem(source,"false");
//	console.log("set " + source + " to " + elem.checked);
}
function retrieveStorageCheck(source)
{
	var elem = document.getElementById(source);
	var value = localStorage.getItem(source);
//	console.log("got " + value + " for " + source);
	if (value == "true")
		elem.checked = true;
	else
		elem.checked = false;
}

function changeStorageNumeric(source)
{
	var elem = document.getElementById(source);
	if (elem != null)
		localStorage.setItem(source,elem.value);
	else
		console.log("could not find " + source + " for storage");
}
function retrieveStorageNumeric(source)
{
	var elem = document.getElementById(source);
	if (elem != null)
		elem.value = localStorage.getItem(source);
	else
		console.log("could not find " + source + " for storage");
}
