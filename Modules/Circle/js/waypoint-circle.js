
var waypoint1 = new Waypoint({
  element: document.querySelector("#trigger1"),
  handler: function(direction) {
    if(direction === "down") {

      d3.select(".animateCircle")
        .transition()
        .duration(500)
        .attr("r",71.11)
        .attr("fill","#FFB350");

    } else if(direction === "up") {

      d3.select(".animateCircle")
        .transition()
        .duration(500)
        .attr("r",20)
        .attr("fill","#B83564");

    }
  }
});
