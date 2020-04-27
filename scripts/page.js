
	
//Create Page
var i, j, k;

// Top level tabs
var mainTabs = [{label:"atk:Tech",text:"Attack Tech"},
				{label:"atk:Div",text:"Attack Divisions"},
				{label:"def:Tech",text:"Defense Tech"},
				{label:"def:Div",text:"Defense Divisions"}
				];

var tabdivelem = document.createElement("div");
tabdivelem.className = "tab";
tabdivelem.id = "MainTabs";
for (i = 0; i < mainTabs.length; i++)
{
	var butelem = document.createElement("button");
	butelem.className = "tablinks";
	butelem.id = "tab:" + mainTabs[i].label;
	butelem.setAttribute("onclick","selectTab(event,'" + mainTabs[i].label + "');");
	butelem.insertAdjacentText("beforeend", mainTabs[i].text);
	tabdivelem.appendChild(butelem);
}
document.body.appendChild(tabdivelem);

// Summary div
tabdivelem = document.createElement("div");
tabdivelem.id = "Summary";
tabdivelem.style = "text-align:center";
var tableelem = document.createElement("table");
tableelem.setAttribute("align","center");

// table header
var tabsecelem = document.createElement("thead");
var tabrowelem = document.createElement("tr");
var tabrowheadelem = document.createElement("th");
tabrowelem.appendChild(tabrowheadelem);
tabrowheadelem = document.createElement("th");
tabrowheadelem.style = "text-align:center";
tabrowheadelem.insertAdjacentText("beforeend", "Width");
tabrowelem.appendChild(tabrowheadelem);
tabrowheadelem = document.createElement("th");
tabrowheadelem.style = "text-align:center";
tabrowheadelem.insertAdjacentText("beforeend", "Organization");
tabrowelem.appendChild(tabrowheadelem);
tabsecelem.appendChild(tabrowelem);
tableelem.appendChild(tabsecelem);

// table body
tabsecelem = document.createElement("tbody");
tabrowelem = document.createElement("tr");
tabrowheadelem = document.createElement("th");
tabrowheadelem.insertAdjacentText("beforeend", "Attacking Army");
tabrowelem.appendChild(tabrowheadelem);
tabrowheadelem = document.createElement("td");
var outputElem = document.createElement("output");
outputElem.id = "atk:Width";
tabrowheadelem.appendChild(outputElem);
tabrowelem.appendChild(tabrowheadelem);
tabrowheadelem = document.createElement("td");
var outputElem = document.createElement("output");
outputElem.id = "atk:Survival";
tabrowheadelem.appendChild(outputElem);
tabrowelem.appendChild(tabrowheadelem);
tabsecelem.appendChild(tabrowelem);

tabrowelem = document.createElement("tr");
tabrowheadelem = document.createElement("th");
tabrowheadelem.insertAdjacentText("beforeend", "Defending Army");
tabrowelem.appendChild(tabrowheadelem);
tabrowheadelem = document.createElement("td");
var outputElem = document.createElement("output");
outputElem.id = "def:Width";
tabrowheadelem.appendChild(outputElem);
tabrowelem.appendChild(tabrowheadelem);
tabrowheadelem = document.createElement("td");
var outputElem = document.createElement("output");
outputElem.id = "def:Survival";
tabrowheadelem.appendChild(outputElem);
tabrowelem.appendChild(tabrowheadelem);
tabsecelem.appendChild(tabrowelem);
tableelem.appendChild(tabsecelem);
tabdivelem.appendChild(tableelem);
document.body.appendChild(tabdivelem);



for (k = 0; k < 2; k++)
//k = 0;
{
	var sideDescriptor;
	var sideDescriptorAdvective;
	var side;
	if (k == 0)
	{
		side = "atk";
		sideDescriptor = "atk";
		sideDescriptorAdvective = "Attacking";
	}
	else {
		side = "def";
		sideDescriptor = "def";
		sideDescriptorAdvective = "Defending";
	}
	var years = ["1918","1934","1936","1938","1939","1940","1941","1942","1943","1944","1945","1946","1950"];
	 
	tabdivelem = document.createElement("div");
	tabdivelem.className = "tabcontent";
	tabdivelem.id = side + ":Tech";
	var h1elem = document.createElement("h1");
	h1elem.style = "font-size:32px;text-align:center;";
	h1elem.insertAdjacentText("beforeend", sideDescriptorAdvective + " Army Technology");
	tabdivelem.appendChild(h1elem);
	
	var divelem = document.createElement("div");
	divelem.id = side + ":years";
    divelem.style = "text-align:center;";
	for (i = 0; i < years.length; i++)
	{
		var inpelem = document.createElement("input");
		inpelem.type = "button";
		inpelem.id = side + ":yb" + years[i];
        inpelem.style = "font-size:16px;text-align:center;background-color:#7F7F7F;";
		inpelem.value = years[i];
		inpelem.setAttribute("onclick","techsYear('" + sideDescriptor + "',"+years[i]+");");
		divelem.appendChild(inpelem);
	}
	tabdivelem.appendChild(divelem);

	var lastGroup = null;	
	var lastMasterGroup = null;
	var MGdivElem = null;
	divelem = null;
	for (i = 0; i < techs.length; i++)
	{
		if (techs[i].group != lastGroup)
		{
			if (lastGroup != null)
			{
				MGdivElem.appendChild(divelem);
			}
			if (techs[i].mastergroup != lastMasterGroup)
			{
				if (lastMasterGroup != null)
				{
					tabdivelem.appendChild(MGdivElem);
				}
				MGdivElem =document.createElement("div");
				MGdivElem.id = side + ":MG " + techs[i].mastergroup;
				var h2elem = document.createElement("h2");
				h2elem.style = "font-size:24px;text-align:center;";
				h2elem.insertAdjacentText("beforeend", techs[i].mastergroup);
				tabdivelem.appendChild(h2elem);
				lastMasterGroup = techs[i].mastergroup;
			} 
			divelem = document.createElement("div");
			divelem.id = side + ":" + techs[i].group;
			var h3elem = document.createElement("h3");
			h3elem.style = "font-size:18px;text-align:center;";
			h3elem.insertAdjacentText("beforeend", techs[i].group);
			MGdivElem.appendChild(h3elem);
			lastGroup = techs[i].group;
		}
		var inpelem = document.createElement("input");
		inpelem.type = "checkbox";
		var idlcl = side + ":" + techs[i].name;
		inpelem.id = idlcl;
		inpelem.setAttribute("onclick","changeStorageCheck('" + idlcl + "');recalculate('" + sideDescriptor + "','" + techs[i].name + "');");
		var labelelem = document.createElement("label");
		labelelem.setAttribute("for",side + ":" + techs[i].name);
		labelelem.insertAdjacentText("beforeend", techs[i].name);
		divelem.appendChild(inpelem);
		divelem.appendChild(labelelem);
	}
	MGdivElem.appendChild(divelem);
	tabdivelem.appendChild(MGdivElem); // add the last one
	document.body.appendChild(tabdivelem);
	
	tabdivelem = document.createElement("div");
	tabdivelem.className = "tabcontent";
	tabdivelem.id = side + ":Div";
	h1elem = document.createElement("h1");
	h1elem.style = "font-size:32px;text-align:center;";
	h1elem.insertAdjacentText("beforeend", sideDescriptorAdvective + " Army Composition");
	tabdivelem.appendChild(h1elem);

	var tabledivelem = document.createElement("div");
	tabledivelem.id = side + ":tableHeadDiv";
	var tableelem = document.createElement("table");
	tableelem.id = side + ":table";
	tableelem.setAttribute("align","center");
	var tableHeadelem = document.createElement("thead");
	tableHeadelem.id = side + ":tableHead";
	var tableRowelem = document.createElement("tr");
	var tableHelem = document.createElement("th");
    tableHelem.style = "text-align:center;width:200px";
	tableHelem.insertAdjacentText("beforeend", "Unit type");
	tableRowelem.appendChild(tableHelem);
	for (i = 1; i <= 5; i++)
	{
        tableHelem = document.createElement("th");
		tableHelem.style = "text-align:center;width:100px";
		tableHelem.insertAdjacentText("beforeend", "Division " + i);
		tableRowelem.appendChild(tableHelem);
	}
	
	tableHeadelem.appendChild(tableRowelem);
    tableelem.appendChild(tableHeadelem);
    tabledivelem.appendChild(tableelem);
    tabdivelem.appendChild(tabledivelem);

    tabledivelem = document.createElement("div");
    tabledivelem.id = side + ":tableBodyDiv";
    tabledivelem.style = "height:300px;overflow-y:scroll;";
    tableelem = document.createElement("table");
	tableelem.setAttribute("align","center");
    tableelem.id = side + ":tableBodyTable";
    tableHeadelem = document.createElement("tbody");
    tableHeadelem.id = side + ":tableBody";

	for (i = 0; i < units.length; i++)
	{
		tableRowelem = document.createElement("tr");
		tableHelem = document.createElement("th");
        tableHelem.style = "width:200px";
		tableHelem.insertAdjacentText("beforeend", units[i].name);
		tableRowelem.appendChild(tableHelem);
		var j;
		for (j = 1; j <= 5;  j++)
		{
			tableHelem = document.createElement("td");
            tableHelem.style = "width:100px";
			var inpElem = document.createElement("input");
			inpElem.type = "number";
            inpElem.style = "text-align:center;width:30px;";
			var idlcl = side + ":Army " + j + units[i].name;
			inpElem.id = idlcl;
			inpElem.setAttribute("onchange","changeStorageNumeric('" + idlcl + "');recalculate('" + sideDescriptor + "','Army');");
			inpElem.setAttribute("min","0");
			inpElem.setAttribute("max","25");
			tableHelem.appendChild(inpElem);
			tableRowelem.appendChild(tableHelem);
		}	
		tableHeadelem.appendChild(tableRowelem);
	}
    tableelem.appendChild(tableHeadelem);
    tabledivelem.appendChild(tableelem);
    tabdivelem.appendChild(tabledivelem);

    tabledivelem = document.createElement("div");
    tabledivelem.id = side + ":tableFootDiv";
    tableelem = document.createElement("table");
	tableelem.setAttribute("align","center");
    tableelem.id = side + ":tableFootTable";
	tableHeadelem = document.createElement("tfoot");
	tableHeadelem.id = side + ":tableFoot";
	tableRowelem = document.createElement("tr");
	tableHelem = document.createElement("th");
	tableHelem.setAttribute("colspan","6");
	tableHelem.style = "text-align:center;"
	tableHelem.insertAdjacentText("beforeend", "Stats");
	tableRowelem.appendChild(tableHelem);
	tableHeadelem.appendChild(tableRowelem);
    var stats = ["Organization", "HP", "Soft Attack", "Hard Attack", "Piercing", "Armor", "Defense", "Breakthrough", "Hardness", "Width" ]
	for (i = 0; i < stats.length; i++)
	{
		tableRowelem = document.createElement("tr");
		tableHelem = document.createElement("th");
        tableHelem.style = "width:200px";
		tableHelem.insertAdjacentText("beforeend", stats[i]);
		tableRowelem.appendChild(tableHelem);
		var j;
		for (j = 1; j <= 5; j++)
		{
			tableHelem = document.createElement("td");
            tableHelem.style = "width:100px";
			var inpElem = document.createElement("output");
			inpElem.style = "text-align:center;";
			inpElem.id = side + ":" + stats[i] + " " + j;
			tableHelem.appendChild(inpElem);
			tableRowelem.appendChild(tableHelem);
		}
		tableHeadelem.appendChild(tableRowelem);
	}
	tableelem.appendChild(tableHeadelem);
	tabledivelem.appendChild(tableelem);
	tabdivelem.appendChild(tabledivelem);
	document.body.appendChild(tabdivelem);
	var elem;
	for (i = 1; i <= 5; i++)
	{
		elem = document.getElementById(side + ":Organization " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":HP " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Soft Attack " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Hard Attack " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Piercing " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Armor " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Defense " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Breakthrough " + i);
		if (elem != null)
			elem.value = 0;		
        elem = document.getElementById(side + ":Hardness " + i);
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Width " + i);
		if (elem != null)
			elem.value = 0;		
	}
	elem = document.getElementById(side + ":Width");
	if (elem != null)
		elem.value = 0;		
	elem = document.getElementById(side + ":Survival");
	if (elem != null)
		elem.value = 0;
} // end of attack / defense loop

selectTab(null,"tab:atk:Div");
document.getElementById("tab:atk:Div").className += " active";
var lsInit = localStorage.getItem("initialized");
if (lsInit != "true")
{
	techsYear("atk",1936,false);
	techsYear("def",1936,false);
	localStorage.setItem("initialized","true");
}
for (j = 0; j < 2; j++)
{
	if (j == 0)
		side = "atk";
	else
		side = "def";
	for (i = 0; i < techs.length; i++)
		retrieveStorageCheck(side + ":" + techs[i].name);
	for (i = 0; i < units.length; i++)
	{
		for (k = 1; k <= 5; k++)
		{
			var idlcl = side + ":Army " + k + units[i].name;
			retrieveStorageNumeric(idlcl);
		}
	}
}
determineUnitTypes();
updateYearButtons();
determineUnitStats("atk");
determineUnitStats("def");
determineUnitBonuses();
determineArmyStats("atk");
determineArmyStats("def");
determineBattleStats();
