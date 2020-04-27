
function determineBattleStats() {
    var width = new Array();
    var breakthrough = 0;
    var defense = 0;
    var hardness = new Array();
    var organization = [0, 0];
    var soft_attack = [0, 0];
    var hard_attack = [0, 0];
    var piercing = [0, 0];
    var armor = [0, 0];
    var survival = [999, 999];
    var i, j;
    width.push(0);
    width.push(0);
    hardness.push(0);
    hardness.push(0);
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 5; j++) {
            width[i] += armies[i][j].width;
            organization[i] += armies[i][j].organization;
            soft_attack[i] += armies[i][j].soft_attack;
            hard_attack[i] += armies[i][j].hard_attack;
            piercing[i] += armies[i][j].piercing;
            armor[i] += armies[i][j].armor;
            hardness[i] += armies[i][j].hardness * armies[i][j].width;
            if (i == 0)
                breakthrough += armies[i][j].breakthrough;
            else
                defense += armies[i][j].defense;
        }
    }
    hardness[0] /= (width[0] * 1.0);
    hardness[1] /= (width[1] * 1.0);

    attacktotal = hardness[0] / 100.0 * hard_attack[1] + (1.0 - hardness[0] / 100.0) * soft_attack[1];
    hits = Math.min(breakthrough, attacktotal) * 0.01 + Math.max(attacktotal - breakthrough, 0) * 0.04;
    orgdmg = hits * 2.5;
    if (piercing[1] > armor[0])
        orgdmg += hits;
    else
        orgdmg *= 0.5;
    if (orgdmg > 0)
        survival[0] = organization[0] / orgdmg;


    attacktotal = hardness[1] / 100.0 * hard_attack[0] + (1.0 - hardness[1] / 100.0) * soft_attack[0];
    hits = Math.min(defense, attacktotal) * 0.01 + Math.max(attacktotal - defense, 0) * 0.04;
    orgdmg = hits * 2.5;
    if (piercing[0] > armor[1])
        orgdmg += hits;
    else
        orgdmg *= 0.5;
    if (orgdmg > 0)
        survival[1] = organization[1] / orgdmg;

    elem = document.getElementById("atk:Width");
    if (elem != null)
        elem.value = width[0].toPrecision(3);
    elem = document.getElementById("atk:Survival");
    if (elem != null)
        elem.value = survival[0].toPrecision(3);
    elem = document.getElementById("def:Width");
    if (elem != null)
        elem.value = width[1].toPrecision(3);
    elem = document.getElementById("def:Survival");
    if (elem != null)
        elem.value = survival[1].toPrecision(3);
}
