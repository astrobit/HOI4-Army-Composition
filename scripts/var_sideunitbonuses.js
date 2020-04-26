var sideunitbonus = new Array();
for (j = 0; j < 2; j++)
{
	var lclside = new Array();
	for (i = 0; i < units.length; i++)
	{
		lclside.push(new unitclass(units[i].name,null,
			1, // width
			1, // organization
			1, // HP
			1,// soft
			1, //hard
			1, // defense
			1, // breakthrough
			1,1,1,1,1,1));
	}
	sideunitbonus.push(lclside);
}
