

	
//Create Page

var i, j, k;
for (k = 0; k < 2; k++)
//k = 0;
{
	var sideDescriptor;
	var sideDescriptorAdvective;
	var side;
	if (k == 0)
	{
		side = "atk";
		sideDescriptor = "Attacker";
		sideDescriptorAdvective = "Attacking";
	}
	else {
		side = "def";
		sideDescriptor = "Defender";
		sideDescriptorAdvective = "Defending";
	}
	var years = ["1918","1934","1936","1937","1938","1939","1940","1941","1942","1943","1944","1945","1946","1950"];
	 
	var tabdivelem = document.createElement("div");
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
        inpelem.style = "font-size:16px;text-align:center;";
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
		inpelem.id = side + ":" + techs[i].name;
		inpelem.setAttribute("onclick","recalculate('" + sideDescriptor + "','" + techs[i].name + "');");
		var labelelem = document.createElement("label");
		labelelem.setAttribute("for",side + ":" + techs[i].name);
		labelelem.insertAdjacentText("beforeend", techs[i].name);
		divelem.appendChild(inpelem);
		divelem.appendChild(labelelem);
	}
	MGdivElem.appendChild(divelem);
	tabdivelem.appendChild(MGdivElem); // add the last one
	document.body.appendChild(tabdivelem)
	
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
    tabdivelem.appendChild(tabledivelem)

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
			inpElem.id = side + ":Army " + j + units[i].name;
			inpElem.setAttribute("onchange","recalculate('" + sideDescriptor + "','Army');");
			tableHelem.appendChild(inpElem);
			tableRowelem.appendChild(tableHelem);
		}	
		tableHeadelem.appendChild(tableRowelem);
	}
    tableelem.appendChild(tableHeadelem);
    tabledivelem.appendChild(tableelem);
    tabdivelem.appendChild(tabledivelem)

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
	document.body.appendChild(tabdivelem)
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
techsYear("Attacker",1936);
techsYear("Defender",1936);
