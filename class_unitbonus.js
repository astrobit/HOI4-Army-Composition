
class unitbonus {
    constructor(unittype, tech, soft_attack, hard_attack, defense, breakthrough, armor, piercing, hardness, speed, production_cost, reliability, organization) {
        this._unittype = unittype;
        this._tech = tech;
        this._soft_attack = soft_attack;
        this._hard_attack = hard_attack;
        this._defense = defense;
        this._breakthrough = breakthrough;
        this._armor = armor;
        this._piercing = piercing;
        this._hardness = hardness;
        this._speed = speed;
        this._production_cost = production_cost;
        this._reliability = reliability;
        this._organization = organization;
    }
    get unittype() { return this._unittype; }
    get tech() { return this._tech; }
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
    get organization() { return this._organization; }

    set unittype(value) { this._unittype = value; }
    set tech(value) { his._tech = value; }
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
    set organization(value) { this._organization = value; }

    reset(value) {
        this._soft_attack = value;
        this._hard_attack = value;
        this._defense = value;
        this._breakthrough = value;
        this._armor = value;
        this._piercing = value;
        this._hardness = value;
        this._speed = value;
        this._production_cost = value;
        this._reliability = value;
        this._organization = value;
    }
}