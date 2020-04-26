
function determineUnitStats(who) {
    var side, sideidx;
    if (who == "atk") {
        side = "atk";
        sideidx = 0;
    }
    else {
        side = "def";
        sideidx = 1;
    }

    for (i = 0; i < currequipment[sideidx].length; i++) {
        var currreset = false;
        // first reset to the base equipment		
        for (j = 0; j < equipments.length && !currreset; j++) {
            if (equipments[j].type == currequipment[sideidx][i].type && equipments[j].rank == 1) {
                currreset = true;
                currequipment[sideidx][i] = equipments[j];
            }
        }
        // find the most modern tech that is selected
        for (j = 0; j < equipments.length; j++) {
            if (equipments[j].type == currequipment[sideidx][i].type && equipments[j].rank > currequipment[sideidx][i].rank) {
                var elem = document.getElementById(side + ":" + equipments[j].enabled_by);
                if (elem != null && elem.checked)
                    currequipment[sideidx][i] = equipments[j];
            }
        }
        sideunitstats[sideidx].setUnitEquipment(currequipment[sideidx][i].type, currequipment[sideidx][i]);
        // infantry equipment is used by several additional types
        if (currequipment[sideidx][i].type == "Infantry") {
            sideunitstats[sideidx].setUnitEquipment("Calvary", currequipment[sideidx][i]);
            sideunitstats[sideidx].setUnitEquipment("Marines", currequipment[sideidx][i]);
            sideunitstats[sideidx].setUnitEquipment("Mountain", currequipment[sideidx][i]);
            sideunitstats[sideidx].setUnitEquipment("Paratrooper", currequipment[sideidx][i]);
            sideunitstats[sideidx].setUnitEquipment("Bicycle", currequipment[sideidx][i]);
            // motorized and mechanized use infantry equipment as base attack values
            sideunitstats[sideidx].setUnitEquipment("Motorized", currequipment[sideidx][i]);
            sideunitstats[sideidx].setUnitEquipment("Mechanized", currequipment[sideidx][i]);
        }
    }
}
