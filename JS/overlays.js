function toggleOverlay() {
  var overlay = document.getElementsByClassName("overlay-container")[0];
  overlay.style.display = (overlay.style.display === "flex") ? "none" : "flex";
}
