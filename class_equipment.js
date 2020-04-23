
class equipment {
    constructor(name, type, rank, enabled_by, soft_attack, hard_attack, defense, breakthrough, armor, piercing, hardness, speed, production_cost, reliability) {
        this._name = name;
        this._rank = rank;
        this._type = type;
        this._enabled_by = enabled_by;
        if (soft_attack == null)
            this._soft_attack = -1;
        else
            this._soft_attack = soft_attack;
        if (hard_attack == null)
            this._hard_attack = -1;
        else
            this._hard_attack = hard_attack;
        if (defense == null)
            this._defense = -1;
        else
            this._defense = defense;
        if (breakthrough == null)
            this._breakthrough = -1;
        else
            this._breakthrough = breakthrough;
        if (armor == null)
            this._armor = -1;
        else
            this._armor = armor;
        if (piercing == null)
            this._piercing = -1;
        else
            this._piercing = piercing;
        if (hardness == null)
            this._hardness = -1;
        else
            this._hardness = hardness;
        if (speed == null)
            this._speed = -1;
        else
            this._speed = speed;
        if (production_cost == null)
            this._production_cost = -1;
        else
            this._production_cost = production_cost;
        if (reliability == null)
            this._reliability = -1;
        else
            this._reliability;
    }
    get name() { return this._name; }
    get rank() { return this._rank; }
    get type() { return this._type; }
    get enabled_by() { return this._enabled_by; }
    get soft_attack() { return this._soft_attack; }
    get hard_attack() { return this._hard_attack; }
    get defense() { return this._defense; }
    get breakthrough() { return this._breakthrough; }
    get armor() { return this._armor; }
    get piercing() { return this._piercing; }
    get hardness() { return this._hardness; }
    get speed() { return this._speed; }
    get production_cost() { return this._production_cost; }
    get reliability() { return this._reliability; }

    set name(value) { this._name = value; }
    set rank(value) { this._rank = value; }
    set type(value) { this._type = value; }
    set enabled_by(value) { this._enabled_by = value; }
    set soft_attack(value) { this._soft_attack = value; }
    set hard_attack(value) { this._hard_attack = value; }
    set defense(value) { this._defense = value; }
    set breakthrough(value) { this._breakthrough = value; }
    set armor(value) { this._armor = value; }
    set piercing(value) { this._piercing = value; }
    set hardness(value) { this._hardness = value; }
    set speed(value) { this._speed = value; }
    set production_cost(value) { this._production_cost = value; }
    set reliability(value) { this._reliability = value; }
}