
function determineArmyStats(who) {
    var side, sideidx;
    if (who == "atk") {
        side = "atk";
        sideidx = 0;
    }
    else {
        side = "def";
        sideidx = 1;
    }

    for (j = 0; j < 5; j++) {
        armies[sideidx][j].reset(0);
        armies[sideidx][j].speed = 6000; // arbitrarily large
        //		reset() {
        //			this._soft_attack = -1;
        //			this._hard_attack = -1;
        //			this._defense = -1;
        //			this._breakthrough = -1;
        //			this._armor = -1;
        //			this._piercing = -1;
        //			this._hardness = -1;
        //			this._speed = -1;
        //			this._production_cost = -1;
        //			this._reliability = -1;
        //		}
        var unitcount = 0;
        var maxarmor = 0;
        var maxpierce = 0;
        for (i = 0; i < units.length; i++) {
            var elem = document.getElementById(side + ":Army " + (j + 1) + units[i].name);
            if (elem != null && Number(elem.value) != 0) {
                var num = Number(elem.value);
                unitcount += num;
                //					var unitidx = sideunitstats[sideidx].unitidx(units[i].name);
                //					console.log("ui = " + unitidx + " (" + units[i].name + ")");
                if (sideunitstats[sideidx].unit[i].organization > 0)
                    armies[sideidx][j].organization += (sideunitstats[sideidx].unit[i].organization + sideunitbonus[sideidx][i].organization) * num;
                if (sideunitstats[sideidx].unit[i].HP > 0)
                    armies[sideidx][j].HP += sideunitstats[sideidx].unit[i].HP * num * sideunitbonus[sideidx][i].HP;
                if (sideunitstats[sideidx].unit[i].soft_attack > 0)
                    armies[sideidx][j].soft_attack += sideunitstats[sideidx].unit[i].soft_attack * num * sideunitbonus[sideidx][i].soft_attack;
                if (sideunitstats[sideidx].unit[i].hard_attack > 0)
                    armies[sideidx][j].hard_attack += sideunitstats[sideidx].unit[i].hard_attack * num * sideunitbonus[sideidx][i].hard_attack;
                if (sideunitstats[sideidx].unit[i].defense > 0)
                    armies[sideidx][j].defense += sideunitstats[sideidx].unit[i].defense * num * sideunitbonus[sideidx][i].defense;
                if (sideunitstats[sideidx].unit[i].breakthrough > 0)
                    armies[sideidx][j].breakthrough += sideunitstats[sideidx].unit[i].breakthrough * num * sideunitbonus[sideidx][i].breakthrough;
                if (sideunitstats[sideidx].unit[i].production_cost > 0)
                    armies[sideidx][j].production_cost += sideunitstats[sideidx].unit[i].production_cost * num * sideunitbonus[sideidx][i].production_cost;
                if (sideunitstats[sideidx].unit[i].hardness > 0)
                    armies[sideidx][j].hardness += sideunitstats[sideidx].unit[i].hardness * num * sideunitbonus[sideidx][i].hardness;
                if (sideunitstats[sideidx].unit[i].piercing > 0) {
                    armies[sideidx][j].piercing += sideunitstats[sideidx].unit[i].piercing * num * sideunitbonus[sideidx][i].piercing;
                    if (maxpierce < sideunitstats[sideidx].unit[i].piercing * sideunitbonus[sideidx][i].piercing)
                        maxpierce = sideunitstats[sideidx].unit[i].piercing * sideunitbonus[sideidx][i].piercing;
                }
                if (sideunitstats[sideidx].unit[i].armor > 0) {
                    armies[sideidx][j].armor += sideunitstats[sideidx].unit[i].armor * num * sideunitbonus[sideidx][i].armor;
                    if (maxarmor < sideunitstats[sideidx].unit[i].armor * sideunitbonus[sideidx][i].armor)
                        maxarmor = sideunitstats[sideidx].unit[i].armor * sideunitbonus[sideidx][i].armor;
                }
                if (sideunitstats[sideidx].unit[i].reliability > 0)
                    armies[sideidx][j].reliability += sideunitstats[sideidx].unit[i].reliability * num * sideunitbonus[sideidx][i].reliability;
                if (sideunitstats[sideidx].unit[i].width > 0)
                    armies[sideidx][j].width += sideunitstats[sideidx].unit[i].width * num;
                if (sideunitstats[sideidx].unit[i].speed > 0 && armies[sideidx][j].speed > sideunitstats[sideidx].unit[i].speed)
                    armies[sideidx][j].speed = sideunitstats[sideidx].unit[i].speed;
            }
        }
        if (unitcount != 0) {
            armies[sideidx][j].organization /= (unitcount * 1.0);
            armies[sideidx][j].hardness /= (unitcount * 1.0);
            armies[sideidx][j].piercing /= (unitcount * 1.0);
            armies[sideidx][j].piercing *= 0.6;
            armies[sideidx][j].piercing += maxpierce * 0.4;
            armies[sideidx][j].armor /= (unitcount * 1.0);
            armies[sideidx][j].armor *= 0.7;
            armies[sideidx][j].armor += maxarmor * 0.3;
            armies[sideidx][j].reliability /= (unitcount * 1.0);
        }
        elem = document.getElementById(side + ":Organization " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].organization;
        elem = document.getElementById(side + ":HP " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].HP;
        elem = document.getElementById(side + ":Soft Attack " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].soft_attack;
        elem = document.getElementById(side + ":Hard Attack " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].hard_attack;
        elem = document.getElementById(side + ":Piercing " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].piercing;
        elem = document.getElementById(side + ":Armor " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].armor;
        elem = document.getElementById(side + ":Defense " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].defense;
        elem = document.getElementById(side + ":Breakthrough " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].breakthrough;
        elem = document.getElementById(side + ":Hardness " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].hardness;
        elem = document.getElementById(side + ":Width " + (j + 1));
        if (elem != null)
            elem.value = armies[sideidx][j].width;
    }
}
