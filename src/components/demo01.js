'use strict';
var React = require('react');
var d3=require('./d3/d3.js');
var Abc=React.createClass({
    render: function() {
        var width=400,height=400
    var svg=d3.selectAll('body')
    .append('svg')
    .attr("width",width)
    .attr("height",height)
    var padding = {left:30, right:30, top:20, bottom:20}//画布周边空白
    var dataset = [10, 20, 30, 40, 33, 24, 12, 5]
    var xScale = d3.scale.ordinal()//x轴的比例尺 离散
    .domain(d3.range(dataset.length))//d3.range生成一个dataset的0到x-1的数组
    .rangeRoundBands([0, width - padding.left - padding.right])
    var yScale = d3.scale.linear()//y轴的比例尺
    .domain([0,d3.max(dataset)])//线性比例尺
    .range([height-padding.top-padding.bottom,0])//反着来因为y方向和y轴方向相反
    var xAxis = d3.svg.axis()//定义x轴
    .scale(xScale)//选取比例尺
    .orient("bottom")//方向 此为横着
    var yAxis = d3.svg.axis()//定义y轴
    .scale(yScale)
    .orient("left")
    svg.append("g")//放置x,y坐标
    .attr("class","axis")
    .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
    .call(xAxis)
    svg.append("g")
    .attr("class","axis")
    .attr("transform","translate(" + padding.left + "," + padding.top + ")")
    .call(yAxis)
    var rectPadding = 4//矩形之间的留白
    var rects=svg.selectAll(".MyRect")//不是很理解
    .data(dataset)
    .enter()
    .append("rect")
    .attr("transform","translate("+padding.left+","+padding.top+")")//留白
    .attr("x",function(d,i){
        return xScale(i)+rectPadding/2//左上角x就是x轴坐标加上间隙
    })
    .attr("width",xScale.rangeBand()-rectPadding)//rangeBand表示每一个的大小
    .attr("height",0)//起始
    .attr("y",yScale(yScale.domain()[0]))//起始 找到定义为0时的坐标数值
    .attr("fill","green")         //初始颜色为红色 填充颜色不要写在CSS里
       .on("mouseover",function(d,i){
           d3.select(this)
               .attr("fill","green");
       })
       .on("mouseout",function(d,i){
           d3.select(this)
               .transition()
               .duration(500)
               .attr("fill","steelblue");
       })
    .transition()               //启动过渡
    .attr("fill","steelblue")   //终止颜色为铁蓝色
    .duration(2000)            //过度时间
    .delay(function(d,i){       //延迟
        return 200*i;
    })
    .ease("bounce")  //动画方式
    .attr("y",function(d){  //最终
        return yScale(d)
    })
    .attr("height",function(d){
        return height-padding.top-padding.bottom-yScale(d)
    })

    var texts=svg.selectAll(".Mytext")
    .data(dataset)
    .enter()
    .append("text")
    .attr("class","MyText")
    .attr("transform","translate("+padding.left+","+padding.top+")")
    .attr("x",function(d,i){//位置和矩形一样
        return xScale(i)+rectPadding/2
    })
    .attr("dx",function(){// 中心点向x轴偏移
        return (xScale.rangeBand()-rectPadding)/2
    })
    .attr("dy",20)
    .text(function(d){
        return d
    })
    .attr("y",yScale(yScale.domain()[0]))//起始 找到定义为0时的坐标数值
    .transition()               //启动过渡
    .duration(2000)
    .delay(function(d,i){
			return i * 200;
		})
	.ease("bounce")
	.attr("y",function(d){
		return yScale(d)
	})
    var circle1 = svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 45)
    .style("fill","green");
    var circle2 = svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 45)
    .style("fill","green");
    var circle3 = svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 45)
    .style("fill","green");
    circle1.transition()
    .duration(1000)
    .attr("cx", 300);
    circle2.transition()
    .duration(1500)
    .attr("cx", 300)
    .style("fill","red")
    .delay(2000);
    circle3.transition()
    .duration(2000)
    .ease("bounce")
    .attr("cx", 300)
    .style("fill","yellow")
    .attr("r", 25)
    .delay(4000);
    }
})
module.exports = Abc;
