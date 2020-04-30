class terrain
{
    constructor(name, attack, combat_width)
    {
        this._name = name;
        this._attack = attack;
        this._combat_width = combat_width;
    }
    get name() { return this._name; }
    get attack() { return this._attack; }
    get combat_width() { return this._combat_width; }

    set name(value) { this._name = value; }
    set attack(value) { this._attack = value; }
    set combat_width(value) { this._combat_width = value; }
}