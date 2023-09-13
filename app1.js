//DIMENSIONS
let height = 500;
width = 1000;
margin = {top: -40, right: 60, bottom: 50, left: 400};

//CREATE SVG
let svg = d3.select('#root')
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
const data = [
    {date: new Date("5"), value: 16.8},
    {date: new Date("10"), value: 17.4},
    {date: new Date("15"), value: 18},
    {date: new Date("20"), value: 19.9},
  
];

//DEFINE X AND Y DOMAINS
x.domain(d3.extent(data, d => d.date));
y.domain([0, d3.max(data, d => d.value)]);

//ADD THE X-AXIS
svg.append('g')
.attr('transform', `translate(0, ${height})`)
.call(d3.axisBottom(x)
   .ticks(d3.timeMonth.every(1))
   .tickFormat(d3.timeFormat("%b %Y"))
);

//ADD THE Y-AXIS
svg.append('g')
.call(d3.axisLeft(y))


//CREATE LINE GENERATOR
const line = d3.line()
.x(d => x(d.date))
.y(d => y(d.value));

//ADD LINE PATH TO SVG
svg.append("path")
.datum(data)
.attr('fill', "none")
.attr('stroke', "blue")
.attr('stroke-width', 2)
.attr('d', line);


