// Schrijf een stuk code die bij elk van de elementen in “arrayOne” de waarden uit ‘arrayTwo’ optelt. Stop de nieuwe waarde in een nieuwe array genaamd “arrayThree”.
var start = 10;
var honderd = 100;
var arrayOne = [1,2,3,4,5,6,7,8,9,10];
var tientothonder = [];
var arrayTwo = [];
for (var i = start; i <honderd ; i++) {
    tientothonder.push(i);
    if (i % 2 === 0) {
        arrayTwo.push(i);
    }
}

var arrayThree = arrayOne.concat(arrayTwo);
document.getElementById("tekst").innerHTML = "" + arrayThree ;