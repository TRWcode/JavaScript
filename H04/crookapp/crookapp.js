var plaatjes = [1,2,3]
var teller = 0;

//ogen
var slideholderOgen = document.getElementById("slideholder1");
slideholderOgen.style.backgroundImage = "url('img/ogen1.jpg')";

slideholderOgen.addEventListener("click", function (){
    clickcounter();
   slideholderOgen.style.backgroundImage = "url('img/ogen" + clickcounter() + ".jpg')";
});



//neus

var slideholderNeus = document.getElementById("slideholder2");
slideholderNeus.style.backgroundImage = "url('img/neus1.jpg')";

slideholderNeus.addEventListener("click", function (){
    clickcounter();
    slideholderNeus.style.backgroundImage = "url('img/neus" + clickcounter() + ".jpg')";
});

//mond

var slideholderMond = document.getElementById("slideholder3");
slideholderMond.style.backgroundImage = "url('img/mond1.jpg";

slideholderMond.addEventListener("click", function (){
    clickcounter();
    slideholderMond.style.backgroundImage= "url('img/mond" + clickcounter() + ".jpg')"

});

function clickcounter () {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}