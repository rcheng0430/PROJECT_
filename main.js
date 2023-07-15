canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
img_height = 150;
img_width = 700;
var img_image;

img_x = 100;
img_y = 100;

function add() 
{
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploading; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploading() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
		document.getElementById("d1").innerHTML="Alphabet Key";
		alphabetkey();
		}
		else if(keyPressed >=48 && keyPressed<=57)
		{
			document.getElementById("d1").innerHTML="Number Key";
			numberkey();
		}
		else if(keyPressed >=37 && keyPressed<=40)
		{
			document.getElementById("d1").innerHTML="Arrow Key";
			arrowkey();
		}
		else if(keyPressed == 17 || keyPressed == 18 || keyPressed == 27)
		{
			document.getElementById("d1").innerHTML="Arrow Key";
			specialkey();
		}
	else 
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
