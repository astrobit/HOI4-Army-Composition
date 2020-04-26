function updateYearButtons()
{
	var years = [1918,1934,1936,1938,1939,1940,1941,1942,1943,1944,1945,1946,1950];
	for (k = 0; k < 2; k++)
	{
		var side;
		if (k == 0)
			side = "atk";
		else
			side = "def";
		for (j = 0; j < years.length; j++)
		{
			var count = 0;
			var totalcount = 0;
			for (i = 0; i  < techs.length; i++)
			{
				if (techs[i].year == years[j])
				{
					totalcount += 1;
					var elemTech = document.getElementById(side + ":" + techs[i].name);
					if (elemTech.checked)
						count = count + 1;
				}
			}
			var elemYearButton = document.getElementById(side + ":yb" + years[j]);
			if (elemYearButton != null)
			{
				if (count != 0 && count == totalcount)
				{
			        elemYearButton.style = "font-size:16px;text-align:center;background-color:#00BF00";
				}
				else
				{
					if (count == 0)
					{
				        elemYearButton.style = "font-size:16px;text-align:center;background-color:#7F7F7F";
					}
					else
					{
				        elemYearButton.style = "font-size:16px;text-align:center;background-color:#FFFF00";
					}
				}
			}
			else
				console.log("Couldnt find years button" + side + ":yb" + years[j]);
		}
		var count = 0;
		var totalcount = 0;
		for (i = 0; i  < techs.length; i++)
		{
			if (techs[i].year > years[years.length - 1])
			{
				totalcount += 1;
				var elemTech = document.getElementById(side + ":" + techs[i].name);
				if (elemTech.checked)
					count = count + 1;
			}
		}
		var elemYearButton = document.getElementById(side + ":yb" + years[years.length - 1]);
		if (elemYearButton != null)
		{
			if (count != 0 && count == totalcount)
			{
			    elemYearButton.style = "font-size:16px;text-align:center;background-color:#00BF00";
			}
			else
			{
				if (count == 0)
				{
				    elemYearButton.style = "font-size:16px;text-align:center;background-color:#7F7F7F";
				}
				else
				{
				    elemYearButton.style = "font-size:16px;text-align:center;background-color:#FFFF00";
				}
			}
		}
		else
			console.log("Couldnt find years button" + side + ":yb" + years[years.length - 1]);
	}
}
