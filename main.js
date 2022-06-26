d = 0;
rwX = 0;
lwX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550 , 500);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("posenet working");
}
function draw() {
    background('#FFFACD');

    document.getElementById("text").innerHTML =  "Width and Height of a square will be = " + d + "px";
    fill('#000000');
    textSize(d);
    text('Aashish' , 10 , 100); 
}
function gotPoses(results) {
    if (results.length> 0)
    {
        console.log(results);
        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        d = floor(lwX - rwX);
        console.log("leftWristX = " + lwX + " rightWristX = " + rwX + " differnce = " + d); 
    }
}
