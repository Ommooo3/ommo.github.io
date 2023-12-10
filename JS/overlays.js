function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

$('#overlay').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
});