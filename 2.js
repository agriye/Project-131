img = "";
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload()
{
    img = loadImage("thumb_720_450_Jungledreamstime_l_56902828.jpg");
}
function draw()
{
    image(img,0,0,640,420);
    fill("white");
    text("Trees",45,75);
    noFill();
    stroke("white");
    rect(30,60,300,350);

    
    fill("white");
    text("Water",450,75);
    noFill();
    stroke("white");
    rect(400,60,200,300);
}
function back()
{
    window.open("index.html");
}
