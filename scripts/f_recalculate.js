
function recalculate(who, techChange)
{
	//console.log("recalculate called " + techChange);
	testTechs(who,techChange);
	updateYearButtons();
	if (techChange != "Army")
	{
		determineUnitTypes();
		determineUnitStats(who);
	}
	determineUnitBonuses();
	determineArmyStats(who);
	determineBattleStats();
}
