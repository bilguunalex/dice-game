//toglogchiin eeljiig hadgalah heseg
// 1r toglogch 0, 2 bol 1
var activePlayer = 0;

//toglogchiin tsugluulsan onoog hadgalah heseg
var scores = [0, 0];

// toglogchiin eeljin dr hadgalah heseg
var roundScore = 0;

//shoonii ali talaaraa buusniig hadgalah huvisagch 1-6
var diceNumber = Math.floor(Math.random() * 6 + 1);
var diceDom = document.querySelector(".dice");
document.getElementById("score-0").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  // alert('Shoo buulaa' + diceNumber);

  // buuusan too 1 ees oor bval toglogchiin eeljiin onoog nemne
  if (diceNumber !== 1) {
    //1ees yalgaatai buulaa. Buusan toog toglogchid nemj ogno
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // ene toglogchiin eeljin dr tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    // toglogchiig shiljuulne
    //1 buusan tul toglogchiin eeljiin ene hesegt nemj ogno
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";

    // if(activePlayer === 0 ){
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
  }
});

//hold tovchnii event listener

document.querySelector(".btn-hold").addEventListener("click", function () {
  // ug toglogchiin tsugluulsan onoog global onoon deer ni nemj ogno
  // if(activePlayer === 0){
  //     scores[0] = scores[0] + roundScore;
  // } else {
  //     scores[1] = scores[1] + roundScore;
  // }
  scores[activePlayer] = scores[activePlayer] + roundScore;
  //eeljiin onoog null bolgono
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //toglogchiin eeljiig solino
});

// console.log('Shoo: ' + diceNumber);
