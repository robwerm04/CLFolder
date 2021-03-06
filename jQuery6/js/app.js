///No user interaction causes change to app
///When user interacts, appropriate change occurs
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mouseDown = false;

///When clicking on control list items
$(".controls").on("click", "li", function(){
	///Deselect sibling elements
	$(this).siblings().removeClass("selected");
	///Select clicked elements
	$(this).addClass("selected");
	///cache current color
	color = $(this).css("background-color");
});
	
	
///When new color is pressed
$("#revealColorSelect").click(function(){
	///Show or hide color select
	changeColor();
	$("#colorSelect").toggle();
});
	
	///Update new color span
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
	
///When color sliders change
$("input[type=range]").on("change", changeColor);
	
///When add color is pressed
$("#addNewColor").click(function(){
	///Append the color to the controls ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	///Select the new color
	$newColor.click();
});		

///On mouse events on the canvas
$canvas.mouseDown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mouseMove(function(e){
	///Draw lines
	if(mouseDown) {
	context.beginPath();
	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	context.lineTo(e.offsetX, e.offsetY);
	context.strokeStyle = color;
	context.stroke();
	lastEvent = e;
	}
}).mouseUp(function(){
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});



