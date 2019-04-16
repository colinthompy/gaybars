var width = 325;
var height = 550;
var margin = {top: 75, left: 25, right: 60, bottom: 150}


var svg = d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height)
  .append("g");

var grp = svg.append("g")
  .attr("transform", "translate(0,0)");

var tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .style("background-color", "#FFB350")
  .style("font-family","Helvetica")
  .style("font-size","9pt");

var phone = grp.append("rect")
  .attr("rx",20)
  .attr("ry",20)
  .attr("x",0)
  .attr("y",0)
  .attr("class",".barRect")
  .attr("width", 325)
  .attr("height", 550)
  .attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; })
  .attr("fill","#000000");

var displayBase = grp.append("rect")
  .attr("x",10)
  .attr("y",50)
  .attr("width",305)
  .attr("height",425)
  .attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; })
  .attr("fill","#FF6A5A");

var phoneButton = grp.append("circle")
  .attr("cx",162.5)
  .attr("cy",510)
  .attr("r",20)
  .attr("stroke-width",3)
  .attr("stroke","#353031")
  .attr("fill","#000000");

var camera = grp.append("circle")
  .attr("cx",100)
  .attr("cy",25)
  .attr("r",5)
  .attr("fill","#353031");

var speaker = grp.append("rect")
  .attr("rx",2.5)
  .attr("ry",2.5)
  .attr("x",125)
  .attr("y",21)
  .attr("width", 75)
  .attr("height", 7.5)
  .attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; })
  .attr("fill","#353031");

  var data = [
    {x:"Straight",y:28},
    {x:"Gay",y:49}
  ];

  var xScale = d3.scaleBand()
    .domain(["Straight","Gay"])
    .rangeRound([margin.left*2, width-margin.right*2])
    .padding(0.5);
  var yScale = d3.scaleLinear()
    .domain([0,100])
    .range([height-margin.bottom,margin.top*2]);

  var xAxis = svg.append("g")
    .attr("transform", `translate (${margin.left},${height-margin.bottom})`)
    .call(d3.axisBottom().scale(xScale));

  var yAxis = svg.append("g")
    .attr("transform", `translate(${margin.left*3},0)`)
    .call(d3.axisLeft().scale(yScale));

  var xLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("x", width/2)
    .attr("y", margin.top*1.25)
    .attr("text-anchor","middle")
    .attr("font-size","9pt")
    .attr("font-family","Helvetica")
    .text("Dating Application Usage by Sexual Orientation")

  var yLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("transform","rotate(-90)")
    .attr("y",margin.left*1.5)
    .attr("x",-height/2)
    .attr("text-anchor","middle")
    .attr("font-size","8pt")
    .attr("font-family","Helvetica")
    .text("Percentage that Uses Dating Apps")

  var bar = svg.selectAll(".barRect")
    .data(data)
    .enter()
    .append("rect")
      .attr("class", "bar")
      .attr("x",function(d) {return xScale(d.x)+margin.left;})
      .attr("y", function(d) {return yScale(d.y); })
      .attr("width", xScale.bandwidth())
      .attr("height",function(d){return height - margin.bottom - yScale(d.y); })
      .attr("fill", "#272D4D")
      .on("mouseover", function(d) {
        d3.select(this)
          .attr("fill", "#FFB350");
        tooltip.style("visibility", "visible")
        tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px")
        tooltip.html((d.y) + " Percent")
      }) .on("mouseout", function(d) {
        d3.select(this)
          .attr("fill", "#272D4D")
        tooltip.style("visibility", "hidden")
      });

  var source = svg.append("text")
    .attr("class","source")
    .attr("x",width/2)
    .attr("y",margin.bottom*3)
    .attr("text-anchor","middle")
    .attr("font-size","6pt")
    .attr("font-family","Helvetica")
    .text("Source: 2017 survey conducted by Clue & the Kinsey Institute")
