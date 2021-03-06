
var circle1 = new Waypoint({
  element: document.querySelector("#circle1"),
  handler: function(direction) {
    if(direction === "down") {

      d3.select(".animateCircle")
        .transition()
        .duration(500)
        .attr("r",71.11)
        .attr("fill","#FFB350");

      d3.select(".percent")
        .text("16.0%");

      d3.select("#explainerLn1")
        .text("of hate crimes are based")

      d3.select("#explainerLn2")
        .text("on sexual orientation bias")

      d3.select("#credit")
        .text("Source: FBI 2017 Hate Crime Statistics")


    } else if(direction === "up") {

      d3.select(".animateCircle")
        .transition()
        .duration(500)
        .attr("r",20)
        .attr("fill","#B83564");

      d3.select(".percent")
        .text("4.5%");

      d3.select(".explainer")
        .text("of Americans identify");

      d3.select("#explainerLn2")
        .text("as LGBTQ+");

      d3.select("#credit")
        .text("Source: Gallup");

    }
  }
});
