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
      document.querySelector("#bobbyCaption").innerHTML="The bar Bobby's at 69 Canal St. in the 1990s. <span class='photoCred'>Photo courtesy of the History Project</span>";
    }
  }
});

var jacquesChange = new Waypoint({
  element: document.querySelector("#jacquesChange"),
  handler: function(direction) {
    if(direction === "down") {
      document.querySelector("#jacques").src="images/jacquesAnimate.gif";
      document.querySelector("#jacquesCaption").innerHTML="The bar Jacques's at 79 Canal St. today. <span class='photoCred'> Photo by Avery Bleichfeld</span>";
    } else if(direction === "up") {
      document.querySelector("#jacques").src="images/jacquesAnimateR.gif";
      document.querySelector("#jacquesCaption").innerHTML="The bar Jacques's at 79 Canal St. in 1984. <span class='photoCred'>Photo courtesy of the History Project</span>";
    }
  }
});

var circle = new Waypoint({
  element: document.querySelector("#circle1"),
  handler: function(direction) {
    if(direction === "down") {

      d3.select(".circle1 .animateCircle")
        .transition()
        .duration(500)
        .attr("r",71.11)
        .attr("fill","#FFB350");

      d3.select(".circle1 .percent")
        .text("16.0%")
        .attr("font-size", "81pt");

      d3.select(".circle1 #explainerLn1")
        .text("of hate crimes are based")

      d3.select(".circle1 #explainerLn2")
        .text("on sexual orientation bias")

      d3.select(".circle1 #credit")
        .text("Source: FBI 2017 Hate Crime Statistics")


    } else if(direction === "up") {

      d3.select(".circle1 .animateCircle")
        .transition()
        .duration(500)
        .attr("r",20)
        .attr("fill","#B83564");

      d3.select(".circle1 .percent")
        .text("4.5%")
        .attr("font-size","90pt");

      d3.select(".circle1 #explainerLn1")
        .text("of Americans identify");

      d3.select(".circle1 #explainerLn2")
        .text("as LGBTQ+");

      d3.select(".circle1 #credit")
        .text("Source: Gallup");

    }
  }
});

var circle = new Waypoint({
  element: document.querySelector("#circle2"),
  handler: function(direction) {
    if(direction === "down") {

      d3.select(".circle2 .animateCircle")
        .transition()
        .duration(500)
        .attr("r",71.11)
        .attr("fill","#FFB350");

      d3.select(".circle2 .percent")
        .attr("x", 315)
        .text("16.0%");

      d3.select(".circle2 .explainer")
        .attr("x", 55)
        .attr("font-size", "25pt")
        .text("of hate crimes are based on sexual orientation bias")

      d3.select(".circle2 #credit")
        .attr("x", 315)
        .text("Source: FBI 2017 Hate Crime Statistics")


    } else if(direction === "up") {

      d3.select(".circle2 .animateCircle")
        .transition()
        .duration(500)
        .attr("r",20)
        .attr("fill","#B83564");

      d3.select(".circle2 .percent")
        .attr("x", 335)
        .text("4.5%");

      d3.select(".circle2 .explainer")
        .attr("x", 175)
        .attr("font-size", "30pt")
        .text("of Americans identify as LGBTQ+");

      d3.select(".circle2 #credit")
        .attr("x", 385)
        .text("Source: Gallup");

    }
  }
});
