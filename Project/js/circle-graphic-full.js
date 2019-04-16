var width = 900;
var height = 900;
var margin = {top: 25, left: 100, right: 25, bottom: 25};

var svg = d3.select("#circle-container1")
  .append("svg")
  .attr("class", "circle1")
  .attr("width","100%")
  .attr("height", "100%")
  .attr("viewBox", "0 0 500 975")
  .attr("preserveAspectRatio", "xMinYMin");

var grp = svg.append("g")
  .attr("transform", "translate(0,0)");

var innerCircle = grp.append("circle")
  .attr("class","animateCircle")
  .attr("cx", width/8)
  .attr("cy", height/2)
  .attr("fill","#B83564")
  .attr("r", 20)
  .attr("z-index", "-1");

var outsideCircle = grp.append("circle")
  .attr("cx", width/8)
  .attr("cy", height/2)
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 5)
  .attr("r", 444.44)
  .attr("z-index", "0");

var percent = grp.append("text")
  .attr("class", "percent")
  .attr("x", width/32)
  .attr("y", height*.55)
  .attr("z-index", "10")
  .attr("font-size", "90pt")
  .text("4.5%");

var explainer1 = grp.append("text")
  .attr("class","explainer")
  .attr("id", "explainerLn1")
  .attr("width", "33%")
  .attr("x", width/32)
  .attr("y", (5*height)/8)
  .attr("z-index", "10")
  .text("of Americans identify");

var explainer2 = grp.append("text")
  .attr("class","explainer")
  .attr("id", "explainerLn2")
  .attr("x", width/32)
  .attr("y", (21*height)/32)
  .attr("z-index", "10")
  .text("as LGBTQ+");

function sourceURL() {
  var url = 'http://google.com';
  window.location.assign = url;
};

var credit = grp.append("a")
  .attr("href", "https://www.w3schools.com/graphics/")
  .append("text")
    .attr("class", "credit")
    .attr("id", "credit")
    .attr("x", width/32)
    .attr("y", (45*height)/64)
    .attr("z-index", "10")
    .html(`<a href="https://www.w3schools.com/graphics/" target=_blank>Source: Gallup</a>`);
