
function recalculate(who, techChange)
{
	//console.log("recalculate called " + techChange);
	testTechs(who,techChange);
	if (techChange != "Army")
		determineUnitStats(who);
	determineArmyStats(who);
	determineBattleStats();
}
