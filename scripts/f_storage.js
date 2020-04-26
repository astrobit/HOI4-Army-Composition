function changeStorageCheck(source)
{
	var elem = document.getElementById(source);
	localStorage.setItem(source,elem.checked);
}
function retrieveStorageCheck(source)
{
	var elem = document.getElementById(source);
	elem.checked = localStorage.getItem(source);
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
