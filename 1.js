img = "";
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload()
{
    img = loadImage("ed-small-bedroom-14-1526489572.jpg");
}
function draw()
{
    image(img,0,0,640,420);
    fill("red");
    text("Bed",45,220);
    noFill();
    stroke("red");
    rect(30,200,400,200);
    
    fill("red");
    text("Plant",500,100);
    noFill();
    stroke("blue");
    rect(450,90,80,500);
    
    
}
function back()
{
    window.open("index.html");
}