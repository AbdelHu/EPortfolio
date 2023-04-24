
// Called whe webpage is loaded
function PageLoadEffect() {
    location.href = "#";
    document.body.style.opacity = 0;
    let opac = 0;

    if (opac != 100) {
        let inter = setInterval(frame, 0.01);

        function frame() {
            if (opac == 100) {
                clearInterval(inter);
            } else {
                document.body.style.opacity = opac / 100;
                opac++;
            }

        }
    }
}

function ObjectEffect() {
    let movableObject = document.getElementById("movable");
    let pos = 0;

    if (pos != 100) {
        let inter = setInterval(frame, 5);

        function frame() {
            if (pos == 100) {
                clearInterval(inter);
            } else {
                pos++;
                console.log(pos);
            }

        }
    }
}

function toHome() {
    location.href = "index.html";
}
function toWebComp() {
    location.href = "comp.html";
}
function toAchievements() {
    location.href = "achievements.html";
}
function toDevelopments() {
    location.href = "developments.html";
}

function PagesDropDown(isOpen) {
    if (!isOpen) {
        let dropDown = document.getElementById("pages_dropdown_id");
        dropDown.style.display = "flex";
        
    } else {
        let dropDown = document.getElementById("pages_dropdown_id");
        dropDown.style.display = "none";
    }
    
}