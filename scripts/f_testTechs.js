
function testTechs(who, techChange) {
    var i;
    var side;
    if (who == "Attacker")
        side = "atk";
    else
        side = "def";
    if (techChange != null && techChange != "Army") {
        var elem = document.getElementById(side + ":" + techChange);
        if (elem != null) {
            var currval = elem.checked;
            if (currval) {
                setPrereqs(side, techChange);
            }
            else {
                clearPostreqs(side, techChange);
            }
        }
    }
}// JavaScript source code
