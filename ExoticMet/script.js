var w = 600,
	h = 600;


var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Exotic','Primitive', 'Oriental'];

//Data
var d = [
	[
	{axis:"Arts of Africa, Oceania, and the Americas",value:19},
  {axis:"Islamic Art",value:33},
  {axis:"Ancient Near Eastern Art",value:5},
  {axis:"Drawings and Prints",value:582},
  {axis:"Greek and Roman Art",value:13},
  {axis:"Photographs",value:29},
	{axis:"European Sculpture and Decorative Arts",value:278},
  {axis:"Egyptian Art",value:9},
  {axis:"Arms and Armor",value:23},
  {axis:"Costume Institute",value:47},
  {axis:"European Paintings",value:58},
  {axis:"Asian Art",value:66},
  {axis:"The American Wing",value:69},
	{axis:"Modern and Contemporary",value:15},
	{axis:"Brooklyn Museum Costume Collection",value:17},
	{axis:"Medieval Art",value:3},
	{axis:"Provenance Research Project",value:19},
	{axis:"Robert Lehman Collection",value:7},
	{axis:"The Cloisters",value:5},
	{axis:"Musical Instruments",value:4},
	{axis:"The Libraries",value:0},
	],[
	{axis:"Arts of Africa, Oceania, and the Americas",value:3506},
  {axis:"Islamic Art",value:6},
  {axis:"Ancient Near Eastern Art",value:1},
  {axis:"Drawings and Prints",value:18},
  {axis:"Greek and Roman Art",value:1},
  {axis:"Photographs",value:24},
  {axis:"European Sculpture and Decorative Arts",value:6},
  {axis:"Egyptian Art",value:0},
  {axis:"Arms and Armor",value:16},
  {axis:"Costume Institute",value:1},
  {axis:"European Paintings",value:151},
  {axis:"Asian Art",value:24},
  {axis:"The American Wing",value:3},
	{axis:"Modern and Contemporary",value:35},
	{axis:"Brooklyn Museum Costume Collection",value:0},
	{axis:"Medieval Art",value:11},
	{axis:"Provenance Research Project",value:18},
	{axis:"Robert Lehman Collection",value:10},
	{axis:"The Cloisters",value:4},
	{axis:"Musical Instruments",value:5},
	{axis:"The Libraries",value:1},
	],[
	{axis:"Arts of Africa, Oceania, and the Americas",value:53},
	{axis:"Islamic Art",value:618},
	{axis:"Ancient Near Eastern Art",value:605},
	{axis:"Drawings and Prints",value:350},
	{axis:"Greek and Roman Art",value:291},
	{axis:"Photographs",value:281},
	{axis:"European Sculpture and Decorative Arts",value:100},
	{axis:"Egyptian Art",value:185},
	{axis:"Arms and Armor",value:181},
	{axis:"Costume Institute",value:157},
	{axis:"European Paintings",value:130},
	{axis:"Asian Art",value:141},
	{axis:"The American Wing",value:21},
	{axis:"Modern and Contemporary",value:75},
	{axis:"Brooklyn Museum Costume Collection",value:30},
	{axis:"Medieval Art",value:43},
	{axis:"Provenance Research Project",value:56},
	{axis:"Robert Lehman Collection",value:20},
	{axis:"The Cloisters",value:13},
	{axis:"Musical Instruments",value:6},
	{axis:"The Libraries",value:2},
	]
	];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 7,
  ExtraWidthX: 30
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)


//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(74,0)')
	.attr("x", w - 660)
	.attr("y", 10)
	.attr("font-size", "10px")
	.attr("fill", "#FFFFFF")
	// .text("Language use on the Met's website");

//Initiate and position the Legend
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(-650,35)')
	;
//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - -65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 18)
	  .attr("height", 18)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - -90)
	  .attr("y", function(d, i){ return i * 20 + 13;})
	  .attr("font-size", "14px")
	  .attr("fill", "#ffcc99")
	  .text(function(d) { return d; })
	  ;
