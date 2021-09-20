var str = "Diederik doolt"

var matches = str.match(/d/gi).length;

document.getElementById("tekst").innerHTML = "" + matches;