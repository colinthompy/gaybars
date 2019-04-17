var width = "100%";
var height = "100%";
var margin = {top: 25, left: 25, right: 25, bottom: 25};

var svg = d3.select("#circle-container2")
  .append("svg")
  .attr("class", "circle2")
  .attr("width",width)
  .attr("height", height)
  .attr("viewBox", "0 0 900 900")
  .attr("preserveAspectRatio", "xMinYMin");

var innerCircle = svg.append("circle")
  .attr("class","animateCircle")
  .attr("cx", 450)
  .attr("cy", 450)
  .attr("fill","#B83564")
  .attr("r", 20)
  .attr("z-index", "-1");

var outsideCircle = svg.append("circle")
  .attr("cx", 450)
  .attr("cy", 450)
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 5)
  .attr("r", 444.44)
  .attr("z-index", "0");

var percent = svg.append("text")
  .attr("class", "percent")
  .attr("x", 335)
  .attr("y", 425)
  .attr("z-index", "10")
  .attr("font-size", "90pt")
  .text("4.5%");

var explainer  = svg.append("text")
  .attr("class","explainer")
  .attr("width", "33%")
  .attr("x", 175)
  .attr("y", 475)
  .attr("z-index", "10")
  .attr("font-size", "30pt")
  .text("of Americans identify as LGBTQ+");

var credit = svg.append("text")
    .attr("class", "credit")
    .attr("id", "credit")
    .attr("x", 385)
    .attr("y", 540)
    .attr("z-index", "10")
    //.attr("font-size" "20pt")
    .text("Source: Gallup");

/*var credit = svg.append("a")
  .attr("href", "https://www.w3schools.com/graphics/")
  .append("text")
    .attr("class", "credit")
    .attr("id", "credit")
    .attr("x", 300)
    .attr("y", 500)
    .attr("z-index", "10")
    .html(`<a href="https://www.w3schools.com/graphics/" target=_blank>Source: Gallup</a>`);*/
