import React , { Component , PropTypes } from 'react'
import d3 from './d3/d3.js'
import D3_axis from './D3_axis'
import { size , padding} from '../action/actions'
export default class D3_histogram extends Component{
  render(){
    const {width,height} = size
    const { left , right , top , bottom } = padding
    let data= this.props.data
    let x=[]
    let y=0
    for(let key in data[0])
    {
      x[++y]=key  //x[1] 对应data里面属性第一项 2为第二项
    }
// 创建x轴的比例尺(线性比例尺)
var xScale = d3.scale.linear()
    .domain(d3.extent(data, function(d) {
        return d[x[1]]
    }))
    .range([0, width - left - right])
// 创建y轴的比例尺(线性比例尺)
var yScale = d3.scale.linear()
    .domain([0, d3.max(data,function(d) {
        return d[x[2]]
    })])
    .range([height - top - bottom, 10])

    // 添加折线
    let line = d3.svg.line()
        .x(function(d) {
            return xScale(d[x[1]])
        })
        .y(function(d) {
            return yScale(d[x[2]])
        })
        // 选择线条的类型
        .interpolate('linear')
    let radius=5
    let color = d3.scale.category10()

    return(
      <svg style = {{ width: width , height: height }}>
        <path transform = {`translate (${left} ,${top})`}
              className={'line'}
              d={line(data)}/>
        <D3_axis xScale={xScale}
                 yScale={yScale}
                 size={size}
                 padding={padding}/>
          {data.map((value,index)=>
          <circle key={index}
                  cx={xScale(value[x[1]])}
                  cy={yScale(value[x[2]])}
                  r={radius}
                  style={{ fill: color(index)}}
                  transform = {`translate (${left} ,${top})`}/>
          )}
      </svg>
    )
  }
}
