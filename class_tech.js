class tech {
    constructor(year, mastergroup, group, name, prereq) {
        this._year = year;
        this._name = name;
        this._group = group;
        this._prereq = prereq;
        this._mastergroup = mastergroup;
    }
    get name() { return this._name; }
    get year() { return this._year; }
    get prereq() { return this._prereq; }
    get group() { return this._group; }
    get mastergroup() { return this._mastergroup; }

}// JavaScript source code
