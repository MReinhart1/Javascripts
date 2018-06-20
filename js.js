





var button = document.querySelector("button");
var isPurp = false;

button.addEventListener("click", function(){
  if(isPurp){
    document.body.style.background = "white";
    isPurp = false;
  } else {
    document.body.style.background = "purple";
    isPurp = true;
  }
});
