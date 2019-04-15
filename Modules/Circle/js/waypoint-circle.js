
var waypoint1 = new Waypoint({
  element: document.querySelector("#trigger1"),
  handler: function(direction) {
    if(direction === "down") {

      d3.select(".animateCircle")
        .transition()
        .duration(500)
        .attr("r",71.11)
        .attr("fill","#FFB350");

      d3.select(".percent")
        .transition()
        .duration(250)
        .attr("fill-opacity",0)
        .attr("font-size", "48pt")
        .text("16.0%")
        .transition()
        .duration(250)
        .attr("fill-opacity",1);

      d3.select("#explainerLn1")
        .text("of hate crimes are based")

      d3.select("#explainerLn2")
        .text("on sexual orientation bias")


    } else if(direction === "up") {

      d3.select(".animateCircle")
        .transition()
        .duration(500)
        .attr("r",20)
        .attr("fill","#B83564");

      d3.select(".percent")
        .transition()
        .duration(500)
        .attr("fill-opacity",0)
        .attr("font-size", "64pt")
        .text("4.4%")
        .transition()
        .duration(500)
        .attr("fill-opacity",1);

      d3.select(".explainer")
        .text("of Americans identify")

      d3.select("#explainerLn2")
        .text("as LGBTQ+")

    }
  }
});
