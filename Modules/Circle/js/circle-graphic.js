
var width = 900;
var height = 900;
var margin = {top: 25, left: 100, right: 25, bottom: 25};

var svg = d3.select("#circle-container")
  .append("svg")
  .attr("width",width)
  .attr("height", height);

var grp = svg.append("g");

var percent = grp.append("text")
  .attr("class", "percent")
  .attr("x", 115)
  .attr("y", 475)
  .attr("z-index", "10")
  .text("4.5%")
  .style("color","white");

var innerCircle = grp.append("circle")
  .attr("class","animateCircle")
  .attr("cx", width/4)
  .attr("cy", height/2)
  .attr("fill","#B83564")
  .attr("r", 20)
  .attr("z-index", "-1");

var outsideCircle = grp.append("circle")
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
