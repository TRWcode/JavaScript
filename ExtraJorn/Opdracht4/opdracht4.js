var arryOne = [1,2,3,4,5,6,7,8,9,10];
var arryFour = [];
for (var i = 0; i < arryOne.length; i++) {
    arryFour[i] = arryOne[i] + 10 ;
}


document.getElementById("tekst").innerHTML = "" + arryFour;
