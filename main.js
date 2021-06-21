canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height= 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height= 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;


background_image = "racing.jpg ";
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadcar1;
    rover_imgTag.src = racing.jpg;
    
}


function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
    
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    if(keyPressed == '38')
    {
        up();
     
    }

    if(keyPressed == '40')
    {
        down();
     
    }

    if(keyPressed == '37')
    {
        left();
     
    }

    if(keyPressed == '39')
    {
        right();
     
    }

}


function up()
{
    if(car1_y >=0)
    {

        car1_y = car1_y -10;
    uploadBackground();
    uploadrover();
    }
}


function down()
{
    if(car1_y <=500)
    {

        car1_y = car1_y +10;
    uploadBackground();
    uploadrover();
}
}


function left()
{
    if(car1_x >=0)
{

    car1_x = car1_x -10;
    uploadBackground();
    uploadcar1();
}
}


function right()
{
    if(car1_x <=700)
{

    car1_x = car1_x +10;
    uploadBackground();
    uploadcar1();
}
}

