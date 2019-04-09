var width = document.querySelector("#barchart").clientWidth;
var height = 400;
var margin = {top:50,left:100,right:25,bottom:25};

var svg = d3.select("#barchart")
  .append("svg")
  .attr("width","100%")
  .attr("height","100%")
  .attr("viewBox", "0 0 700 500")
  .attr("preserveAspectRatio","xMinYMin");

var data = [
  {sexOr: "Straight", appUse: 28},
  {sexOr: "Gay", appUse: 49}
];

var yScale = d3.scaleBand()
  .domain(["Straight","Gay"])
  .rangeRound([margin.top,height-margin.bottom])
  .padding(0.25);

var xScale = d3.scaleLinear()
  .domain([0,100])
  .range([margin.left,width-margin.right]);

var xAxis = svg.append("g")
  .attr("transform",`translate(0,${height-margin.bottom})`)
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("transform",`translate(${margin.left},0)`)
  .call(d3.axisLeft().scale(yScale));

var label = svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 + (margin.top/2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Dating App Usage by Sexual Orientation");

var bar = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
    .attr("class","appUseBar")
    .attr("x",margin.left)
    .attr("y", function(d) {return yScale(d.sexOr);})
    .attr("width",function(d) {return xScale(d.appUse) - margin.left; })
    .attr("height", yScale.bandwidth())
    .attr("fill","#83B8AA")
    .on("mouseover", function() {
      d3.select(this)
        .attr("fill","#FBB252");
    }).on("mouseout", function() {
      d3.select(this)
        .attr("fill","#83B8AA");
    })
