
function setPrereqs(side, techChange) {
    var i;
    for (i = 0; i < techs.length; i++) {
        if (techs[i].name == techChange) {
            if (techs[i].prereq != null) {
                var elem = document.getElementById(side + ":" + techs[i].prereq);
                if (elem != null)
                    elem.checked = true;
                setPrereqs(side, techs[i].prereq);
            }
        }
    }
}// JavaScript source code
