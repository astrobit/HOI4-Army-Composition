
var currequipment = new Array();
// initialize with the base equipment
for (j = 0; j < 2; j++) {
    var currequipmentinner = new Array();
    var lasttype = null;
    for (i = 0; i < equipments.length; i++) {
        if ((lasttype == null || equipments[i].type != lasttype) && (equipments[i].rank == 1)) {
            lasttype = equipments[i].type;
            var eqlcl = equipments[i];
            currequipmentinner.push(eqlcl);
        }
    }
    currequipment.push(currequipmentinner);
}

