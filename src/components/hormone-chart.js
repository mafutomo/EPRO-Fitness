import * as moment from 'moment';
import * as d3 from 'd3';
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function() {

function createChart(data, user){

  var initialWidth = window.innerWidth;
  var initialHeight = window.innerWidth < 600 ? initialWidth * 0.7 : initialWidth * 0.4;

  var margin = {
    top: 40,
    right: 80,
    bottom: 80,
    left: 80
  }

  var width = initialWidth - margin.left - margin.right;
  var height = initialHeight - margin.top - margin.bottom;

//create scales
  var x = d3.scaleBand()
      .range([0, width], .1);

  var y0 = d3.scaleLinear()
    .range([height, 0]),
  y1 = d3.scaleLinear()
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
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//fetch data
// const getContraceptiveData = async() => {
//   const response = await fetch('https://epro-api.herokuapp.com/hormones/non_hormonal', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     mode: "cors"
//   })
//   const data = await response.json();
//   console.log(data);

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
    .call(yAxisLeft);

  svg.append("g")
    .classed("axisRight", true)
    .attr("transform", "translate(" + (width) + ",0)")
    .call(yAxisRight);

  svg.select(".axisRight")
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(50," + height/2 + ") rotate(90)")
    .text("Progesterone(ng/ml)");

  svg.select(".axisLeft")
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(-50," + height/2 + ") rotate(-90)")
    .text("Estrogen(pg/ml)");

  svg.select(".x-axis")
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + width/2 + ", 60)")
    .text("Day ___");

  var bars = svg.selectAll(".bar")
    .data(data)
    .enter();

  bars.append("rect")
    .attr("class", "bar1")
    .attr("x", function(d) { return x(d.day); })
    .attr("width", x.bandwidth()/2)
    .attr("y", function(d) { return y0(d.estrogen); })
    .attr("height", function(d,i,j) { return height - y0(d.estrogen); })
    .attr("fill", "#484043")
    .on("mouseover", function(d, i) {
      tooltip.style("display", "inline");
      d3.select(this)
      .attr("fill", "#775b66");
    })
    .on("mouseout", function(d, i) {
      tooltip.style("display", "none");
      d3.select(this).attr("fill", "#484043")
    })
    .on("mousemove", function(d) {
      var xPosition = d3.mouse(this)[0] - 15;
      var yPosition = d3.mouse(this)[1] - 25;
      tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
      tooltip.select("text").text(d.estrogen + ' pg/ml');
    })
  bars.append("rect")
    .attr("class", "bar2")
    .attr("x", function(d) { return x(d.day) + x.bandwidth()/2; })
    .attr("width", x.bandwidth() / 2)
    .attr("y", function(d) { return y1(d.progesterone); })
    .attr("height", function(d,i,j) { return height - y1(d.progesterone);
    })
    .attr("fill", "#52BFAB")
    .on("mouseover", function(d, i) {
      tooltip.style("display", "inline");
      d3.select(this)
      .attr("fill", "#52bfaa80");
    })
    .on("mouseout", function(d, i) {
      tooltip.style("display", "none");
      d3.select(this).attr("fill", "#52BFAB")
    })
    .on("mousemove", function(d) {
      var xPosition = d3.mouse(this)[0] - 15;
      var yPosition = d3.mouse(this)[1] - 25;
      tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
      tooltip.select("text").html(d.progesterone + "<br/>" + "ng/ml");
    });

  //progess bar based on user inputted days since last period
  svg.select("#chart")
    .append('svg')
    .attr("height", 100)
    .attr("width", width)

  //find today's date
  var today = moment().format('MMMM Do YYYY');
  // console.log(today);
  var usersLastDay = "20180901";
  // console.log(usersLastDay);
  // var usersLastDayCorrected = usersLastDay.split('/').reverse().join('');
  // console.log(usersLastDayCorrected);


  //users cycle length
  var cycleLength = 28;
  var cycleLengthArr = [];
  for (let i = 1; i <= cycleLength; i++) {
    cycleLengthArr.push(i)
  }

  //find how many days have elapsed since last period
  var daysAgo = moment(usersLastDay, "YYYYMMDD").fromNow();
  // console.log(daysAgo);
  var daysAgoNum = Number(daysAgo.match(/\d+/g));
  var currentCycleDay = daysAgoNum%cycleLength;

  //use users cycle length to determine length of progess bar
  var states = cycleLengthArr,
  segmentWidth = width,
  currentState = daysAgoNum;

  var colorScale = d3.scaleOrdinal()
    .domain(states)
    .range((['yellow', 'orange', 'green']))

  svg.append('rect')
    .attr('class', 'bg-rect')
    .attr('rx', 10)
    .attr('ry', 10)
    .attr('fill', 'gray')
    .attr('height', 15)
    .attr('width', width)
    .attr('x', 0)
    .attr('y', height + 25);

  var progress = svg.append('rect')
    .attr('class', 'progress-rect')
    .attr('fill', "#fba100")
    .attr('height', 15)
    .attr('width', width)
    .attr('rx', 10)
    .attr('ry', 10)
    .attr('x', 0)
    .attr('y', height + 25);

  progress.transition()
    .duration(1000)
    .attr('width', function(){
      var index = states.indexOf(currentState);
      return segmentWidth * ((index + 1)/states.length);
    })

  function moveProgressBar(state){
    progress.transition()
      .duration(1000)
      .attr('fill', function(){
        return colorScale(state);
      })
      .attr('width', function(){
        var index = states.indexOf(state);
        return (index + 1) * segmentWidth;
      });
    }

  // Prep the tooltip bits, initial display is hidden
  var tooltip = svg.append("g")
    .attr("class", "tooltip")
    .style("display", "none");

  tooltip.append("rect")
    .attr("width", 80)
    .attr("height", 28)
    .attr("fill", "white")
    .style("opacity", 0.5)
    .style("text-align", "center");

  tooltip.append("text")
    .attr("x", 40)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .style("text-align", "center");
  }

function getData() {
   let user = {};
   let rawContraceptiveData = [];
   var userId;

    //get the user_id
    $.ajax({
          url: 'https://epro-api.herokuapp.com/auth/status',
          type: 'GET',
          dataType: 'json',
          success: function(result) {
            // console.log(result);
            userId = result.data.user_id
            // console.log(userId);
            // get the user info
             $.getJSON(`https://epro-api.herokuapp.com/users/${userId}`, function(result){
               user = result;
               // console.log(user);
             //get the hormone data
             $.getJSON("https://epro-api.herokuapp.com/hormones/non_hormonal", function(result){
               rawContraceptiveData = result.data;

               //prepare the data and draw the charts
               let data = prepDataForChart(rawContraceptiveData);
               // console.log(data);
               createChart(data, user);
             })
           });
          },
          error: function() {
            // alert('boo!');
            console.log("boo")
           },
          beforeSend: setHeader
        });
    // $.getJSON('https://epro-api.herokuapp.com/auth/status', function(result){
    //   console.log(result);
    // })
 }

 function prepDataForChart(rawData) {
    return rawData.map(ele => {
      return {
        "day": ele.day,
        "estrogen": ele.est,
        "progesterone": (ele.prog/10)
      }
    })
   }

 function setHeader(xhr) {
    xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
  }

getData();

   window.addEventListener('resize', function(){window.location.reload(true);});
})
