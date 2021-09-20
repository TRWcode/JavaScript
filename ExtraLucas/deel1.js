
function helloWorld() {
    document.getElementById('hallo').innerHTML = "Hallo World"

}

function helloName() {
    let naam = "Thomas";
    document.getElementById('mijnNaam').innerHTML = "Hallo, " + naam;
}

function round() {
    var nummer = 14.8;
    document.getElementById("getal").innerHTML = "" + Math.round(nummer);

}