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
      document.querySelector("#bobbys").src="images/bobbyAnimate.gif";
      document.querySelector("#bobbyCaption").innerHTML="The liquor store currently at 69 Canal St. <span class='photoCred'> Photo by Avery Bleichfeld</span>";
    } else if(direction === "up") {
      document.querySelector("#bobbys").src="images/bobbyAnimateR.gif";
      document.querySelector("#bobbyCaption").innerHTML="The bar Bobby's at 69 Canal St in the 1990s. <span class='photoCred'>Photo courtesy of the History Project</span>";
    }
  }
});
