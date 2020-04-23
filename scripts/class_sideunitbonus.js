

class sideunitbonunses {
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
    addUnitBonus(unittype, unitbonus) {
        var i;
        var unitidxlcl = -1;
        for (i = 0; i < this.unit.length && unitidxlcl == -1; i++) {
            if (unittype == this.unit[i].name) {
                unitidxlcl = i;
                if (unitbonus.soft_attack != null)
                    this.unit[unitidxlcl].soft_attack = equipment.soft_attack;
                if (unitbonus.hard_attack != null)
                    this.unit[unitidxlcl].hard_attack = equipment.hard_attack;
                if (equipment.piercing != null)
                    this.unit[unitidxlcl].piercing = equipment.piercing;
                if (equipment.reliability != null)
                    this.unit[unitidxlcl].reliability = equipment.reliability;
                if (equipment.defense != null)
                    this.unit[unitidxlcl].defense = equipment.defense;
                if (equipment.breakthrough != null)
                    this.unit[unitidxlcl].breakthrough = equipment.breakthrough;
                if (equipment.armor != null)
                    this.unit[unitidxlcl].armor = equipment.armor;
                if (equipment.hardness != null)
                    this.unit[unitidxlcl].hardness = equipment.hardness;
                if (equipment.production_cost != null)
                    this.unit[unitidxlcl].production_cost = equipment.production_cost;
                if (equipment.reliability != null)
                    this.unit[unitidxlcl].reliability = equipment.reliability;
            }
        }
        if (unitidxlcl == -1)
            console.log("Could not find unit type " + unittype);
    }
    reset(value) {
        var i;
        for (i = 0; i < this.unit.length; i++) {
            this.unit[i].reset(value);
        }
    }
}