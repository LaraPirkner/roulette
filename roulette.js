var score = 25;
var uitkomst;
var keuze;

function button(knopje) {
    keuze = knopje
}

document.getElementById("score").innerHTML = "score " + score;

function speel() {
  uitkomst = Math.floor(Math.random() * 37);
    console.log(uitkomst);
document.getElementById("uitkomst").innerHTML =  uitkomst;

    if (keuze == undefined) {
      alert("Maak een keuze!!!!!!!!!")
    }
    else if (score <=0) {
      alert("jammer joh, jouw geld is op")
    }

    else if  (uitkomst == keuze) {
      score++
      document.getElementById("score").innerHTML = "score " + score;
      alert("WELPOES");
    }

   else if (uitkomst != keuze) {
     score--
     document.getElementById("score").innerHTML = "score " + score;
     alert("MISPOES");
   }

}
