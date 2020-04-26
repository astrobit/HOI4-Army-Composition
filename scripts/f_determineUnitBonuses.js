function determineUnitBonuses()
{
	for (j = 0; j < 2; j++)
	{
		if (j == 0)
			side = "atk";
		else
			side = "def";
		for (i = 0; i < sideunitbonus[j].length; i++)
		{
			sideunitbonus[j][i].soft_attack = 1.0;
			sideunitbonus[j][i].hard_attack = 1.0;
			sideunitbonus[j][i].defense = 1.0;
			sideunitbonus[j][i].breakthrough = 1.0;
			sideunitbonus[j][i].armor = 1.0;
			sideunitbonus[j][i].piercing = 1.0;
			sideunitbonus[j][i].hardness = 1.0;
			sideunitbonus[j][i].speed = 1.0;
			sideunitbonus[j][i].production_cost = 1.0;
			sideunitbonus[j][i].reliability = 1.0;
			sideunitbonus[j][i].organization = 0.0;
			sideunitbonus[j][i].HP = 1.0;
		}

		for (i = 0; i < unitbonuses.length; i++)
		{
			var elemTech = document.getElementById(side + ":" + unitbonuses[i].tech);
			if (elemTech == null)
				console.log("Unable to read tech " + unitbonuses[i].tech + " for " + unitbonuses[i].unittype);
			else
			{
				if (elemTech.checked)
				{
					var thisFound = false;
					for (k = 0; k < sideunitbonus[j].length && !thisFound; k++)
					{
						if (sideunitbonus[j][k].name == unitbonuses[i].unittype)
						{
							thisFound = true;
							if (unitbonuses[i].soft_attack != null)
								sideunitbonus[j][k].soft_attack *= (unitbonuses[i].soft_attack * 0.01 + 1.0);
							if (unitbonuses[i].hard_attack != null)
								sideunitbonus[j][k].hard_attack *= (unitbonuses[i].hard_attack * 0.01 + 1.0);
							if (unitbonuses[i].defense != null)
								sideunitbonus[j][k].defense *= (unitbonuses[i].defense * 0.01 + 1.0);
							if (unitbonuses[i].breakthrough != null)
								sideunitbonus[j][k].breakthrough *= (unitbonuses[i].breakthrough * 0.01 + 1.0);
							if (unitbonuses[i].armor != null)
								sideunitbonus[j][k].armor *= (unitbonuses[i].armor * 0.01 + 1.0);
							if (unitbonuses[i].piercing != null)
								sideunitbonus[j][k].piercing *= (unitbonuses[i].piercing * 0.01 + 1.0);
							if (unitbonuses[i].hardness != null)
								sideunitbonus[j][k].hardness *= (unitbonuses[i].hardness * 0.01 + 1.0);
							if (unitbonuses[i].speed != null)
								sideunitbonus[j][k].speed *= (unitbonuses[i].speed * 0.01 + 1.0);
							if (unitbonuses[i].production_cost != null)
								sideunitbonus[j][k].production_cost *= (unitbonuses[i].production_cost * 0.01 + 1.0);
							if (unitbonuses[i].reliability != null)
								sideunitbonus[j][k].reliability *= (unitbonuses[i].reliability * 0.01 + 1.0);
							if (unitbonuses[i].organization != null)
								sideunitbonus[j][k].organization += unitbonuses[i].organization; // I think org is always added - but need to be careful, some may multiply.
						}
					}
				}
			}
		}
	}
}
