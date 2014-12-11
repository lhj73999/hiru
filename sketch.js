var img;


function setup() 
{
  createCanvas(800, 600);
  noFill();
  stroke(255, 0, 0);

  img = loadimage("버섯-맞춤.png")
}

function draw()
{ 
  background(0);
    
  //mouse ellipse
  img(mouseX, mouseY, 100, 100);
  
}   