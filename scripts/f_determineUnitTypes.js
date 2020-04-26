function determineUnitTypes()
{
	var k;
	var side;
	for (k = 0; k < 2; k++)
	{
		if (k == 0)
			side = "atk";
		else
			side = "def";

		for (i = 0; i < units.length; i++)
		{
		    var elemTech = document.getElementById(side + ":" + units[i].enabling_tech);
			if (elemTech == null)
				console.log("error in tech " + units[i].name + " " + units[i].enabling_tech);
			else
			{
				for (j = 0; j < 5; j++)
				{
				    var elemArmy = document.getElementById(side + ":Army " + (j + 1) + units[i].name);
					if (elemTech.checked)
					{
						elemArmy.disabled = false;
					}
					else
					{
						elemArmy.disabled = true;
						if (elemArmy.value != null)
							elemArmy.value = null;
					}
				}
			}
		}
	}
}
