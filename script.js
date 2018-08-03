
var background = document.getElementById('background');
var backgroundImage = new Image();
backgroundImage.src = '/background.jpg';
backgroundImage.onload = function() {
  background.className = "background-image";
}
