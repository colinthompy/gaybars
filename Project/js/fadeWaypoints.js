/*

Template for Waypoint trigger:

var WAYPOINT = new Waypoint({
  element: document.querySelector(SELECTION),
  handler: function(direction) {
    if(direction === "down") {

      <-- ACTION GOES HERE FOR DOWNWARD SCROLLING-->

    } else if(direction === "up") {

      <-- ACTION GOES HERE FOR UPWARD SCROLLING -->

    }
  }
});

*/

/*Element is what triggers the event, handler is the function triggered when the element is triggered.
You can have different actions for different directions of scrolling.
*/

var bobbysChange = new Waypoint({
  element: document.querySelector("#bobbysChange"),
  handler: function(direction) {
    if(direction === "down") {
      $("#bobbys").fadeOut("slow");
      document.querySelector("#bobbys").src="images/fillerBobbys.png";
      $("#bobbys").fadeIn("slow");
    } else if(direction === "up") {
      $("#bobbys").fadeOut("slow");
      document.querySelector("#bobbys").src="images/oldBobbys.jpg";
      $("#bobbys").fadeIn("slow");
    }
  }
});
