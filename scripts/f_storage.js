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

function changeStorageByNameCheck(source) {
    var elem = document.getElementsByName(source);
    if (elem != null && elem.length != 0) {
        for (i = 0; i < elem.length; i++) {
            if (elem[i].checked)
                localStorage.setItem(source, elem[i].value);
        }
    }
    else
        console.log("could not find " + source + " for storage");
}
function retrieveStorageByNameCheck(source) {
    var elem = document.getElementsByName(source);
    if (elem != null && elem.length != 0) {
        for (i = 0; i < elem.length; i++) {
            elem[i].checked = elem[i].value == localStorage.getItem(source);
        }
    }
    else
        console.log("could not find " + source + " for storage");
}

