var fotos = document.getElementsByTagName("img");
var randomNumbers = [];
var random = 0;

while (randomNumbers.length <9) {
    random = Math.floor(Math.random() *9) +1 ;
    if (randomNumbers.lastIndexOf(random) == -1){
        randomNumbers.push(random);
        console.log(randomNumbers)
    }

}
random = 0;
for (var foto in fotos) {
    fotos[foto].src = "Img/dier" + randomNumbers[random] + ".jpg";
    random++;
    
}