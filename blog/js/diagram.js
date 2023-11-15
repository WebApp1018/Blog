var counter = 0;
moveCircle();
setInterval(function(){
  moveCircle();
},3000);
function moveCircle(){
  var c = counter % $(".ball").length;
  $(".ball").removeClass('active');
  $(".ball-"+(c+1)).addClass('active');
  ++counter
}