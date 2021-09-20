function whileLoop() {
    var print = ""
    var nul = 0;

    while (nul < 11) {
        print += nul
        nul++;
    }
    document.getElementById("wloop").innerHTML = print;
}


function forLoop () {
    var print = ""
    for (var i = 0; i < 11; i++) {
        print += i;
    }
    document.getElementById("floop").innerHTML = print;
}

function tafel () {
    var tafel = 5;
    var resultaat = ""
    for (var i = 1; i <11 ; i++) {

        resultaat += tafel + "*" + i + "=" + tafel * i +"<br/>";
    }
    document.getElementById("tafel").innerHTML = resultaat;
}


