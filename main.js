function preload(){
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.position(625,320);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
}

function modelLoaded(){
    console.log("Posenet is Active!XD");
    poseNet.on("pose", gotPose);
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,500,400);
}

function snap(){
    save ('Mustache.png');
}