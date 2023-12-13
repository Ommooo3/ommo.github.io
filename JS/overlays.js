$(document).ready(function () {
var player = $('#cp2077')[0];
  var player2 = $('#ommologos')[0];
 $f(player).addEvent('ready', ready); 
  $f(player2).addEvent('ready', ready); 
  
  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
    }
    else {
      element.attachEvent(eventName, callback, false);
    }
  }

  function ready(player_id) {
    var froogaloop = $f(player_id);

    function onFinish() {
      froogaloop.addEvent('finish', function(data) {
          toggleOverlay(player_id);
          resetVideo(player_id);
      });
    }
    onFinish();
  }

});

function toggleOverlay(playerid){
   $("#" + playerid).parent("#specialBox").parent().css("opacity",".8");
   $("#" + playerid).parent("#specialBox").parent().toggle();
   $("#" + playerid).parent("#specialBox").toggle();
}