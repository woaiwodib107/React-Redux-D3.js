import React , { Component , PropTypes } from 'react'
import d3 from './d3/d3.js'
import D3_axis from './D3_axis'
import { size , padding} from '../action/actions'
export default class D3_histogram extends Component{
  render(){
    const { width , height} = size
    const { left , right , top , bottom } = padding
    const data= this.props.data
    //x轴的比例尺
    let xScale = d3.scale.ordinal()
    .domain(d3.range(data.length))
    .rangeRoundBands([0, width - left - right])
    //y轴的比例尺
    let yScale = d3.scale.linear()
    .domain([0,d3.max(data)])
    .range([height - top - bottom, 0])

    let color = d3.scale.category10()
    //矩形之间的空白
    let rectPadding = 4
    // let transform={gx: `translate( ${left} , ${height - bottom})`,
    //                gy: `translate( ${left} , ${top})`}
    return(
        <svg style = {{ width: width , height: height }}>
          { data.map((value , index)=>
            <g key={index}>
              <rect transform = {`translate (${left} ,${top})`}
                    x = { xScale(index)+rectPadding/2}
                    y = { yScale(value)}
                    width = { xScale.rangeBand() - rectPadding}
                    height = { height - top - bottom - yScale(value) }
                    style={{ fill: color(index)}}/>
              <text transform = {`translate( ${left} , ${top})`}
                    className={'MyText'}
                    x={xScale(index) + rectPadding/2}
                    y={yScale(value)}
                    dx={(xScale.rangeBand() - rectPadding) / 2}
                    dy={20}>
                {value}
              </text>
            </g>
          )}
          <D3_axis xScale={xScale} yScale={yScale} size={size} padding={padding}/>
        </svg>
    )
  }
}
