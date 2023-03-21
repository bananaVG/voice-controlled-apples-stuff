x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number="";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  loadImage("apple.png")
  apple="apple.png";
}

function start()
{
  document.getElementById("status").innerHTML = "Speak. Don't bother lying, since Baskin-Robbins always finds out.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number=Number(content);

  if(Number.isInteger(to_number))
  {
    document.getElementById("status").innerHTML="Started drawing poisoned apple of absolute devastation.";
    draw_apple="set";

  }

  else{
    document.getElementById("status").innerHTML="Baskin-Robbins found out you were lying, so try again, or else...";

  }

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Congradulations: you weren't lying when you said " + content; 

}

function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  createCanvas(screen_width,screen_height-150);
  CanvasCaptureMediaStreamTrack.position(0,150);
}

function draw() {
  if(draw_apple == "set"  i=1(i <= to_number))
  { i=i+1
    x=Math.floor(Math.random() * 700);
    y=Math.floor(Math.random() * 400);
    Image(apple,x,y,50,50)

    document.getElementById("status").innerHTML = to_number + " Your apples were made. We don't know if they are explosive apples of definitive death or our poisoned apples of absolute devastation, so whatever you do, don't pull the stem(pin for explosive) and don't eat them.";
    draw_apple = "";
    speak_data=to_number;
    to_number="Your apples were made. We don't know if they are explosive apples of definitive death or our poisoned apples of absolute devastation, so whatever you do, don't pull the stem(pin for explosive) and don't eat them.";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
