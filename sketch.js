var img;


function setup() 
{
  createCanvas(800, 600);
  img = loadimage("1.png");
}

function draw()
{ 
  background(0);
  noFill();
  nostroke();

  //mouse ellipse
  image(img, 100, 100);
  
}   