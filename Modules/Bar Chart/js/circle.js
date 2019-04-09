var width = 500;
var height = 500;

var svg = d3.select("#circle-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var circle = svg.append("circle")
  .attr("class", "animateCircle")
  .attr("cx", width/2)
  .attr("cy", height/2)
  .attr("fill", "red")
  .attr("r", 50)
