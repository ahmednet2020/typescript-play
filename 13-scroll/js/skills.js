var x1 = 0;


function skillsup(id1, id2, degree) {
    "use strict";
    if (x1 <= degree) {
        document.getElementById(id1).style.width = x1 + "%";
        document.getElementById(id2).innerHTML = x1 + "%";
        x1 += 1;
        setTimeout(function () {skillsup(id1, id2, degree); }, 25);
        
    } else { x1 = 0; }
}

function on1(id4, id3, nub1) {
    "use strict";
    if (x1 === 0) {
        skillsup(id4, id3, nub1);
    }
}


