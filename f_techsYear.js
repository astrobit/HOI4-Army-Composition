
function techsYear(who, year) {
    var i;
    var side;
    if (who == "Attacker")
        side = "atk";
    else
        side = "def";
    for (i = 0; i < techs.length; i++) {
        if (techs[i].year <= year) {
            var elem = document.getElementById(side + ":" + techs[i].name);
            if (elem != null)
                elem.checked = true;
        }
        else {
            var elem = document.getElementById(side + ":" + techs[i].name);
            if (elem != null)
                elem.checked = false;
        }
    }
    recalculate(who);
}// JavaScript source code
