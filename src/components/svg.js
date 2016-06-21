let svg = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);
let pie = d3.layout.pie();
let piedata = pie(dataset);
// let outerRadius = 150;	//外半径
// let innerRadius = 0;	//内半径，为0则中间没有空白
let arc = d3.svg.arc()	//弧生成器
.innerRadius(innerRadius)	//设置内半径
.outerRadius(outerRadius);	//设置外半径
let color = d3.scale.category10();
let arcs = svg.selectAll("g")
.data(piedata)
.enter()
.append("g")
.attr("transform","translate("+ (width/2) +","+ (width/2) +")");
arcs.append("path")
.attr("fill",function(d,i){
  return color(i);
})
.attr("d",function(d){
  return arc(d);
});

// data.map(fucntion(){
//   <path></path>
//   return <circle color={color[]}>
// })
