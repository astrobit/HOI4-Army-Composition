
class sideunitstat {
    constructor(side, units) {
        this._side = side;
        this.unit = units;
    }
    unitidx(unittype) {
        var i;
        var retidx = -1;
        for (i = 0; i < this.unit.length && retidx == -1; i++) {
            if (unittype == this.unit[i].name)
                retidx = i;
        }
        return retidx;
    }
    setUnitEquipment(unittype, equipment) {
        var i;
        var unitidxlcl = -1;
        for (i = 0; i < this.unit.length && unitidxlcl == -1; i++) {
            if (unittype == this.unit[i].name) {
                unitidxlcl = i;
                if (equipment.soft_attack != -1)
                    this.unit[unitidxlcl].soft_attack = equipment.soft_attack;
                if (equipment.hard_attack != -1)
                    this.unit[unitidxlcl].hard_attack = equipment.hard_attack;
                if (equipment.piercing != -1)
                    this.unit[unitidxlcl].piercing = equipment.piercing;
                if (equipment.reliability != -1)
                    this.unit[unitidxlcl].reliability = equipment.reliability;
                if (equipment.defense != -1)
                    this.unit[unitidxlcl].defense = equipment.defense;
                if (equipment.breakthrough != -1)
                    this.unit[unitidxlcl].breakthrough = equipment.breakthrough;
                if (equipment.armor != -1)
                    this.unit[unitidxlcl].armor = equipment.armor;
                if (equipment.hardness != -1)
                    this.unit[unitidxlcl].hardness = equipment.hardness;
                if (equipment.production_cost != -1)
                    this.unit[unitidxlcl].production_cost = equipment.production_cost;
                if (equipment.reliability != -1)
                    this.unit[unitidxlcl].reliability = equipment.reliability;
            }
        }
        if (unitidxlcl == -1)
            console.log("Could not find unit type " + unittype);
    }
}