function greaterLessOrEqual() {
    var x = 10;
    var y = 10;

    if (x > y){
        document.getElementById("groterdan").innerHTML = "y is kleiner dan x";

    } else if (x == y){
        document.getElementById("groterdan").innerHTML = "x is gelijk aan y";
    } else {
        document.getElementById("groterdan").innerHTML = "is x kleiner dan y";
    }



}





function inBetween() {
    var x = 2;

    if (x >=2 && x <=8 ) {
        document.getElementById("between").innerHTML = "waar";
    }   else {
        document.getElementById("between").innerHTML = "niet waar";
    }





}