img = "";
status1 = "";
objects = [];


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    objectDetector.detect(img, gotResult);
    objects = results;
   
}
function gotResult(error, result){
    if (error){
        console.log (error);
}
    console.log(results);
}
function preload(){
    img = loadImage('banheiro.jpg');
    img = loadImage('sala de jogos.jpg');
    img = loadImage('sala.jpg');
    img = loadImage('cozinha.webp');
    img = loadImage('quarto.avif');  
}

