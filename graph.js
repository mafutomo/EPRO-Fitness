

var data = d3.csv("non_hormonal_bc.csv", function(err, data){
  if (err) {
    return console.log(err);
  }
  generate(data);
  console.log(data);
  console.log(data.length);
})

var n = 2, // The number of series.
    m = 28; // The number of values per series.

function generate(data){
  var chart_width     =   800;
  var chart_height    =   400;
  var padding         =   50;
  var barPadding = 2;

  // Create SVG Element
  var svg  =  d3.select( '#chart' )
      .append( 'svg' )
      .attr( 'width', chart_width )
      .attr( 'height', chart_height );

  // Create Scales
  var x_scale = d3.scaleBand()
    .domain(d3.range(data.length))
    .rangeRound([padding, chart_width-padding])
    .paddingInner(0.05)

  // var x_scale = d3.scaleLinear()
  //     .domain([0, 28])
  //     .range([ padding, chart_width - padding ])

  var y_scaleLeft = d3.scaleLinear()
      .domain([ 0, 400])
      .range([ chart_height - padding, padding ]);

  var y_scaleRight = d3.scaleLinear()
      .domain([0, 10])
      .range([chart_height - padding, padding])

  // var r_scale = d3.scaleLinear()
  //     .domain([0, d3.max(data, function( d ){
  //         return d[1];
  //     })])
  //     .range([5, 30]);
  //
  // var a_scale = d3.scaleSqrt()
  //     .domain([ 0, d3.max(data, function(d) {
  //         return d[1];
  //     })])
  //     .range([ 0, 25 ]);

  //create axis
  var xAxis = d3.axisBottom()
    .scale(x_scale)
    .ticks(28)

  var yAxisLeft = d3.axisLeft()
    .scale(y_scaleLeft)
    .ticks(5)
    // .tickFormat(function(d){
    //   return d + '%'
    // })

  var yAxisRight = d3.axisRight()
    .scale(y_scaleRight)
    .ticks(5)

  svg.append('g')
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + (chart_height-padding) + ")")
    .call(xAxis)

  svg.append('g')
    .attr("class", "y-axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxisLeft)

  svg.append('g')
    .attr("class", "y-axis")
    .attr("transform", "translate(" + (chart_width - padding) + ",0)")
    .call(yAxisRight)

    // Bind Data and create bars

  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr( 'x', function( d, i ){
        return x_scale(i);
    })
  //   .attr('x', function(d, i){
  //   return i * ((chart_width - padding*2)/data.length) + padding;
  // })
  .attr('y', function(d){
    return chart_height - d.estrogen - padding;
  })
  // .attr("width", 5)
  .attr( 'width', x_scale.bandwidth() )
  // .attr("width", (chart_width - padding )/data.length - barPadding)
  .attr("height", function(d){
    return d.estrogen;
  })
  .attr("fill", "#7ED26D")
}


// Create Labels
// svg.append("g")
//     .selectAll( 'text' )
//     .data( data )
//     .enter()
//     .append( 'text' )
//     .text(function(d) {
//         return d.join( ',' );
//     })
//     .attr("x", function(d) {
//         return x_scale(d[0]);
//     })
//     .attr("y", function(d) {
//         return y_scale(d[1]);
//     });
