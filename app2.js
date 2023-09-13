//FOR BAR GRAPH 

//DIMENSIONS
let height2 = 500;
width = 1000;
margin = {top: -60, right: 60, bottom: 50, left: 400};

//CREATE SVG
let svg1 = d3.select('#root2')
.append("svg")
.attr('height', height)
.attr('width', width)
.append('g')
.attr('transform', `translate(${margin.left},${margin.top})`);

//let rScale = d3.scaleSqrt().domain([10, 200]).range([20, 100])

//SCALES/AXES
 x = d3.scaleTime()
.range([0, width]);

 y = d3.scaleLinear()
.range([height, 0]);

//CREATE DATA
const data1 = [
    {date: new Date("2023"), value: 20},
    {date: new Date("2023"), value: 14},
    {date: new Date("2023"), value: 12},
    {date: new Date("2023"), value: 9},
    {date: new Date("2023"), value: 14},
    {date: new Date("2023"), value: 15},
    {date: new Date("2023"), value: 14},
    {date: new Date("2023"), value: 18},
    {date: new Date("2023"), value: 10},
    {date: new Date("2023"), value: 24},
  
];

//DEFINE X AND Y DOMAINS
x.domain(d3.extent(data1, d => d.date));
y.domain([0, d3.max(data1, d => d.value)]);

//ADD THE X-AXIS
svg1.append('g')
.attr('transform', `translate(0, ${height})`)
.call(d3.axisBottom(x)
   .ticks(d3.timeMonth.every(1))
   .tickFormat(d3.timeFormat("%b %Y"))
);

//ADD THE Y-AXIS
svg1.append('g')
.call(d3.axisLeft(y))

//LINE GENERATOR
const line1 = d3.line()
.x(d => x(d.date))
.y(d => y(d.value));

//ADD LINE PATH TO SVG
svg1.append("path2")
.datum(data1)
.attr('fill', "none")
.attr('stroke', "blue")
.attr('stroke-width', 2)
.attr('d', line1);