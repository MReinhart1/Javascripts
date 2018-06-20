

var buttonP1 = document.querySelector("#button1");
var buttonP2 = document.querySelector("#button2");
var reset = document.querySelector("#reset");
var score = document.querySelector("#scoreCard");
var playT0 = document.querySelector("p");

var limitText = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;






function updateScore(){
  score.textContent = "The score is: " + p1Score + " to " + p2Score;
  score.style.backgroundColor = null;
  console.log(limitText.value);
  if(p1Score == limitText.value){
    score.style.backgroundColor = "red";
    buttonP1.disabled = true;
    buttonP2.disabled = true;

  } else if(p2Score == limitText.value){
    score.style.backgroundColor = "blue";
    buttonP1.disabled = true;
    buttonP2.disabled = true;
  }
}

buttonP1.addEventListener("click", function(){
  p1Score++;
  updateScore();
});


buttonP2.addEventListener("click", function(){
  p2Score++;
  updateScore();
});

reset.addEventListener("click", function(){
  resets()
});

function resets(){
  p1Score = 0;
  p2Score = 0;
  buttonP1.disabled = false;
  buttonP2.disabled = false;
  limitText.value = 5;
  playT0.textContent = "Playing to: 5";
  updateScore();
}

limitText.addEventListener("change", function() {
  playT0.textContent = "Playing to: " + limitText.value;



});
