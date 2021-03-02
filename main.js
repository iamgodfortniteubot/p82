var mousevent = "";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color;
var width;
var radius;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}

function my_mousedown(e){
    mousevent = "mouseDown";
    }
    
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_Mouse_x= e.clientX - canvas.offsetLeft;
        current_position_of_Mouse_y= e.clientY - canvas.offsetTop;
        if(mousevent == "mouseDown"){
        console.log("Current position of x and and y coordinates = ");
        console.log("x = " + current_position_of_Mouse_x +  "y = " + current_position_of_Mouse_y );
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_Mouse_x, current_position_of_Mouse_y, radius ,0, 2*Math.PI );
        ctx.stroke();
        }
    }
        