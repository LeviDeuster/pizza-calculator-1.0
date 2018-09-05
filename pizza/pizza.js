/**
 * Levi Deuster Pizza calculator
 */

function pizzaselectsmall() {
    aantalsmall = window.prompt("Vul het aantal small pizzas in");
    if (aantalsmall >= 0) {
        window.alert = aantalsmall + "Small pizza's toegevoegd";
        smalltotaal = aantalsmall * 4.55;
        document.getElementById("smallaantal").innerHTML = aantalsmall + "- small pizzas:" + smalltotaal;
    } else
    {
        document.getElementById("smallaantal").innerHTML = "0 small pizzas";
        window.alert ("bestelling gecancelled");
        aantalsmall = 0;
    }
}

function pizzaselectmedium() {
    aantalmedium = window.prompt("Vul het aantal medium pizzas in");
    if (aantalmedium >= 0) {
        mediumtotaal = aantalmedium * 8.55;
        document.getElementById("mediumaantal").innerHTML = aantalmedium + "- medium pizzas:" + mediumtotaal;
    } else
    {
        document.getElementById("mediumaantal").innerHTML = "0 medium pizzas";
        window.alert ("bestelling gecancelled");
        aantalmedium = 0;
    }
}

function pizzaselectlarge() {
    aantallarge = window.prompt("Vul het aantal large pizzas in");
    if (aantallarge >= 0) {
        largetotaal = aantallarge * 12.55;
        document.getElementById("largeaantal").innerHTML = aantallarge + "- large pizzas:" + largetotaal;
    } else
    {
        document.getElementById("largeaantal").innerHTML = "0 large pizzas";
        window.alert ("bestelling gecancelled");
        aantallarge = 0;
    }
}

function totaalberekening() {
    totaal = largetotaal + mediumtotaal + smalltotaal;
    document.getElementById("totaalprijs").innerHTML = "totaal prijs:" + totaal;
}
