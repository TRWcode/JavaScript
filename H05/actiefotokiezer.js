pics = document.getElementById("pics");
createpicholders();
createactiefotos ();

function createpicholders () {
    for (var i = 0; i < 9; i++) {
        pictureholder = document.createElement("div");
        pictureholder.className = "picture-holder" ;
        pictureholder.id = "picture-holder-" + i;
        pics.appendChild(pictureholder);
    }
}

function createactiefotos () {
    pictureholders = document.getElementsByClassName("picture-holder");
        for (var i = 0; i < pictureholders.length; i++) {
            favoriet = document.createElement("div");
            favoriet.className = "favoriet";
            favoriet.id = "favoriet_" + (i+1);


            actiefoto = document.createElement("img");
            actiefoto.src = "img/actiefoto" + (i+1) + ".jpg";
            actiefoto.id = (i+1);
            actiefoto.addEventListener("click", function () {
                maakfavoriet(this.id);
            });
            pictureholders[i].appendChild(favoriet);
            pictureholders[i].appendChild(actiefoto);
    }
}

    function maakfavoriet (id) {
    console.log("maak mij" + id );
    notsofavoriet = document.getElementsByClassName("favoriet");

        for (var i = 0; i < notsofavoriet.length; i++) {
            notsofavoriet[i].style.backgroundImage = "none";

        }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/heart.png')";

    }

