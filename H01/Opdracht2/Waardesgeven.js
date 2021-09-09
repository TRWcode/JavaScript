let waarde = 0
let teller = 9
let text = "";

for (let i = 1; i < teller; i++) {

 text += "de waarde van i is " + waarde + [i] + "<br>";

}

document.getElementById("waarderekenen").innerHTML = text;