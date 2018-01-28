var margin = {top: 80, right: 80, bottom: 80, left: 80},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scaleBand()
    .range([0, width], .1);

var y0 = d3.scaleLinear()
  .domain([300, 1100])
  .range([height, 0]),
y1 = d3.scaleLinear()
  .domain([20, 80])
  .range([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x)

// create left yAxis
var yAxisLeft = d3.axisLeft()
  .scale(y0)
  .ticks(4)

// create right yAxis
var yAxisRight = d3.axisRight()
  .scale(y1)
  .ticks(6)

//create chart
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("class", "graph")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 var data = d3.csv("non_hormonal_bc.csv", function(err, data){
   data.forEach(function(d) {
    d.day = +d.day;
    d.estrogen = +d.estrogen;
    d.progesterone = +d.progesterone;
  })
   x.domain(data.map(function(d) { return d.day; }));
   y0.domain([0, d3.max(data, function(d) { return d.estrogen; })]);
   y1.domain([0, d3.max(data, function(d) { return d.progesterone; })]);

  svg.append("g")
      .classed("x-axis", true)
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
    .classed("axisLeft", true)
	  .attr("transform", "translate(0,0)")
	  .call(yAxisLeft)
	  // .append("text")
	  // .attr("y", 6)
	  // .attr("dy", "-2em")
	  // .style("text-anchor", "end")
	  // .style("text-anchor", "end")
	  // .text("Estrogen(pg/ml)");

  svg.append("g")
    .classed("axisRight", true)
	  .attr("transform", "translate(" + (width) + ",0)")
	  .call(yAxisRight)
	  // .append("text")
	  // .attr("y", 6)
	  // .attr("dy", "-2em")
	  // .attr("dx", "2em")
	  // .style("text-anchor", "end")
	  // .text("Progesterone(ng/ml)");

  svg.selectAll(".axisRight")
    .append("text")
    .text("Progesterone(ng/ml)");

  var bars = svg.selectAll(".bar").data(data).enter();
  bars.append("rect")
      .attr("class", "bar1")
      .attr("x", function(d) { return x(d.day); })
      .attr("width", x.bandwidth()/2)
      .attr("y", function(d) { return y0(d.estrogen); })
	    .attr("height", function(d,i,j) { return height - y0(d.estrogen); })
      .attr("fill", "#a15d54");
  bars.append("rect")
      .attr("class", "bar2")
      .attr("x", function(d) { return x(d.day) + x.bandwidth()/2; })
      .attr("width", x.bandwidth() / 2)
      .attr("y", function(d) { return y1(d.progesterone); })
      .attr("height", function(d,i,j) { return height - y1(d.progesterone);
   })
      .attr("fill", "#6b476c");;
 })
