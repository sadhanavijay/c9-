var bnt_red,bnt_green

function setup() 
{ createCanvas(600, 600);
 
      
   bnt_red = createButton("RED");
   bnt_red.position(70,50);
   bnt_red.mousePressed(red_bg);
  
   bnt_red = createButton("GREEN");
   bnt_red.position(270,50);
   bnt_red.mousePressed(green_bg);

  textAlign(CENTER);
  textSize(15);
}  
function red_bg()
{
  r=255;
  g=0;
  b=0;
}
function green_bg()
{
  r=0;
  g=255;
  b=0;
}

function draw()
 {
  background(200,10,200)
}