
var width = 900;
var height = 900;
var margin = {top: 25, left: 100, right: 25, bottom: 25};

var data = {4.5, 16.0}

var svg = d3.select("#circle-container")
  .append("svg")
  .attr("width",width)
  .attr("height", height);

var elem =

var percent = svg.append("div")
  .attr("class", "percent")
  .attr("z-index", "10")
  .text("16.03%");

var innerCircle = svg.append("circle")
  .attr("class","animateCircle")
  .attr("cx", width/4)
  .attr("cy", height/2)
  .attr("fill","#B83564")
  .attr("r", 20)
  .attr("z-index", "-1");

var outsideCircle = svg.append("circle")
  .attr("cx", width/4)
  .attr("cy", height/2)
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 5)
  .attr("r", 444.44)
  .attr("z-index", "0");

/*var numberText = svg.append("div")
  .attr("class", "numberText")
  .style("z-index", "10")
  .text("Hello, world!");*/
