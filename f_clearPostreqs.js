
function clearPostreqs(side, techChange) {
    var i;
    for (i = 0; i < techs.length; i++) {
        if (techs[i].prereq == techChange) {
            var elem = document.getElementById(side + ":" + techs[i].name);
            if (elem != null)
                elem.checked = false;
            clearPostreqs(side, techs[i].name);
        }
    }
}// JavaScript source code
