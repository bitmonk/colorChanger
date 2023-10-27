
//Generate random hash value for the color;
function randomNumber(){

    letters = "abcdefg0123456789"
    color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
}

function changeColor(){
    document.getElementById("changeHeading").style.color = randomNumber();

}

function stopTime(){
    clearInterval(intervalId);
    var x = document.getElementById("changeHeading");
   x.style.color="black";
    
}
function setTime(){
intervalId = setInterval(changeColor, 500);
document.getElementById("changeHeading").innerHTML="I will change my color everytime";
}

function deleteContent(){
    var h = document.getElementById("changeHeading");
    h.innerHTML=".";
    alert("Heading Deleted !");
}

const deleteBtn = document.getElementById("deleteBtn");
const button = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

button.addEventListener("click", setTime);
stopBtn.addEventListener("click", stopTime);
deleteBtn.addEventListener("click", deleteContent);

