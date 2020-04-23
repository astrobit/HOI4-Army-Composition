
class unitclass {
    constructor(name, width, organization, HP, soft_attack, hard_attack, defense, breakthrough, armor, piercing, hardness, speed, production_cost, reliability) {
        this._name = name;
        if (soft_attack == null)
            this._soft_attack = -1;
        else
            this._soft_attack = soft_attack;
        if (organization == null)
            this.organization = -1;
        else
            this._organization = organization;
        if (HP == null)
            this.HP = -1;
        else
            this._HP = HP;
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
            this._hardness;
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
        if (width == null)
            this._width = 0;
        else
            this._width = width;
    }
    get name() { return this._name; }
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
    get width() { return this._width; }
    get organization() { return this._organization; }
    get HP() { return this._HP; }

    set name(value) { this._name = value; }
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
    set width(value) { this._width = value; }
    set organization(value) { this._organization = value; }
    set HP(value) { this._HP = value; }

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
        this._width = value;
        this._organization = value;
        this._HP = value;
    }
}