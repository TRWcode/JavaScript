var start = 10;
var einde = 100;
var tientothonderd = [];
var arrayTwo = [];

for (var i = start; i < einde; i++) {
    tientothonderd.push(i);
    if (i % 2 === 0){
        arrayTwo.push(i);
    }
}
document.getElementById("tekst").innerHTML = "" + "<br />" + arrayTwo ;







