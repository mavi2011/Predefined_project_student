x = 0;
y = 0;

 screen_width = 0;
 screen_height = 0;
 to_number = "";
 speak_data = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){

}



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing Apple";
      draw_apple = "set";
    }
    else{
      document.getElementById("status").innerHTML = "The speech has not recognizd a number";
    }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 create = createCanvas(screen_width, screen_height-150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + "Apples Drawn";
    speak();   
    for(var i = i; i<= to_number; i++){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
  apple = loadImage('apple.png');
}