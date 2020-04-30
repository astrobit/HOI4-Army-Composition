var sideunitbonus = new Array();
for (j = 0; j < 2; j++)
{
	var lclside = new Array();
	for (i = 0; i < units.length; i++)
	{
		lclside.push(new unitclass(units[i].name,null,
			1.0, // width
			1.0, // organization
			1.0, // HP
			1.0,// soft
			1.0, //hard
			1.0, // defense
			1.0, // breakthrough
            1.0, // armor
            1.0, // piercing
            1.0, // hardness
            1.0, // speed
            1.0, // production cost
            1.0)); // reliability
	}
	sideunitbonus.push(lclside);
}
