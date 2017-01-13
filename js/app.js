$(document).ready(function(){
  var btn=$("input");
  for (var i=0; i<btn.length; i++) {
   var btnColor=$(btn[i]).attr("data-color");
   $(btn[i]).css("background", btnColor);
}


var paint=false;
var clickX, clickY;
context = document.getElementById('paper').getContext("2d");

var color = "black";
$(':button').click(function(){
 color = $(this).attr('data-color');
   });   // Attribue la couleur du carré au pinceau

//définit la fonction "dessiner en fonction des coordonnées de la souris"
$('#paper').mousedown(function(e){
  paint = true;
  redraw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
 //cette ligne me semble optionnelle
});

$('#paper').mousemove(function(e){
  if(paint){
   redraw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
}
});

$('#paper').mouseup(function(e){
  paint = false;
});

$('#paper').mouseleave(function(e){
  paint = false;
});
var largeur = "5";
$('.val').click(function(){
 largeur = $(this).attr("data");
});
// définie la fonction redraw
function redraw(x, y, dragging){
  if(dragging) {
   context.beginPath();
   context.strokeStyle=color;
   context.lineWidth=largeur;
   context.lineJoin="round";
   context.moveTo(clickX, clickY);
   context.lineTo(x, y);
   context.closePath();
   context.stroke();
}
clickX=x;
clickY=y;
}


});




























   