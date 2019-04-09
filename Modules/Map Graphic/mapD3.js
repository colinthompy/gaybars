var width = document.querySelector("#mapBackground").clientWidth;
var height = document.querySelector("#mapBackground").clientHeight;

console.log(width);
console.log(height);

var svg = d3.select("#mapBackground")
  .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

var background = svg.append("svg:image")
  .attr("xlink:href", "map-background.bmp")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("x", 0)
  .attr("y", 0);

var data = [
  {barName: "1270", xPos: 326.08, yPos: 595.84, yearOpen: "1970", yearClose: "1988"},
  {barName: "Casablanca", xPos: 169.177, yPos: 54.34, yearOpen: "1955", yearClose: "2012"},
  {barName: "Sporters", xPos: 776.98, yPos: 264, yearOpen: "1957", yearClose: "1995"},
  {barName: "Jack's", xPos: 304.688, yPos: 134.702, yearOpen: "1960s", yearClose: "1987"},
  {barName: "Marquee", xPos: 401, yPos: 204, yearOpen: "1970s", yearClose: "mid 1980s"},
  {barName: "Campus Manray", xPos: 399, yPos: 216.5, yearOpen: "1983", yearClose: "2005"},
  {barName: "Paradise", xPos: 469.5, yPos: 261.6, yearOpen: "1981", yearClose: "2018"},
  {barName: "1270", xPos: 469.5, yPos: 519.75, yearOpen: "1970", yearClose: "1988"},
  {barName: "Buddies", xPos: 658, yPos: 441.1, yearOpen: "1969", yearClose: "1986 (moved)"},
  {barName: "Boston Eagle", xPos: 781.2, yPos: 518.75, yearOpen: "1985 (moved)", yearClose: "n/a"},
  {barName: "Darts", xPos: 720.5, yPos: 490.6, yearOpen: "1978", yearClose: "1979"},
  {barName: "Uncle Charlie's/FRITZ", xPos: 274.6, yPos: 485, yearOpen: "1980", yearClose: "1982"},
  {barName: "Chaps", xPos: 684.5, yPos: 459.4, yearOpen: "1975", yearClose: "1998(moved)"},
  {barName: "Buddies", xPos: 850.4, yPos: 413.25, yearOpen: "1989 (moved)", yearClose: "1992"},
  {barName: "The Cave", xPos: 835, yPos: 395, yearOpen: "1945", yearClose: "early 1970s"},
  {barName: "Napoleon Club", xPos: 292.1, yPos: 438.75, yearOpen: "1952", yearClose: "1998"},
  {barName: "Community Club/The Bar/Skippers", xPos: 790.3, yPos: 405.3, yearOpen: "1976", yearClose: "1984"},
  {barName: "Prelude", xPos: 695.5, yPos: 424.5, yearOpen: "1982", yearClose: "1988"},
  {barName: "Citadel", xPos: 861.3, yPos: 384.9, yearOpen: "1974", yearClose: "1988"},
  {barName: "Playland", xPos: 878.9, yPos: 398, yearOpen: "1937", yearClose: "1988"},
  {barName: "Somewhere", xPos: 987.2, yPos: 323.1, yearOpen: "1976", yearClose: "1982"},
  {barName: "The Saints", xPos: 966.5, yPos: 299.7, yearOpen: "1973", yearClose: "1980"},
  {barName: "Bobby's", xPos: 908.6, yPos: 208.2, yearOpen: "1990", yearClose: "1995"},
  {barName: "Obsessions", xPos: 892.7, yPos: 221, yearOpen: "1989", yearClose: "1991"},
  {barName: "Sporters", xPos: 822.75, yPos: 259, yearOpen: "1957", yearClose: "1995"}
]

var tooltip = d3.select("#mapBackground")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden");

  var circle = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function(d) {return d.xPos - 7})
      .attr("cy", function(d) {return d.yPos + 62})
      .attr("r", 5)
      .attr("fill", "red")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("class", "circle")
      .on("mouseover", function(d) {
        d3.select(this).attr("fill","#F6C900")
          .attr("r",10);
        tooltip.style("visibility", "visible")
          .style("top", (event.pageY-22)+"px")
          .style("left",(event.pageX+17)+"px")
          .text(`${d.barName} opened in ${d.yearOpen} and closed in ${d.yearClose}.`);
      }) .on("mouseout", function() {
        d3.select(this).attr("fill","red")
          .attr("r",5)
          return tooltip.style("visibility", "hidden");
      });


/*for (i=0; i<barInfo.length; i++){
  var x = barInfo[i].xPos;
  var y = barInfo[i].yPos;
  var name = barInfo[i].barName;
  var open = barInfo[i].yearOpen;
  var close = barInfo[i].yearClose;
  var marker = svg.append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 5)
      .attr("fill", "red")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .on("mouseover", function() {
        d3.select(this).attr("fill","steelblue")
          .attr("r",10);
        tooltip.style("visibility", "visible")
          .style("top", (event.pageY-10)+"px")
          .style("left",(event.pageX+10)+"px")
          .text(`${name}`);
      }).on("mouseout", function() {
        d3.select(this).attr("fill","red")
          .attr("r",5)
          return tooltip.style("visibility", "hidden");
      });
};*/
