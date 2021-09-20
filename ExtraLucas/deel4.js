function printArray () {
    var array = []
    for (var i = 0; i < 6; i++) {
        array.push(i);
    }
    document.getElementById("parray").innerText = array;
}

function sortArray () {
    var array = [3,2,4,0,1];

    for (let i = 0; i <array.length; i++) {
        array.sort();
    }
    document.getElementById("sarray").innerHTML = array;
}

function average (){
    var array = [8.4, 7.3, 5.6, 6.3, 4.7]
    var totaal = 0;
    for (var i = 0; i <array.length ; i++) {
        totaal += array[i];
    }
        document.getElementById("average").innerHTML = totaal / array.length;
    }