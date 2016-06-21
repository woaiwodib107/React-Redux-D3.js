import React , { Component , PropTypes } from 'react'
import d3 from './d3/d3.js'
import {size} from '../action/actions'
export default class D3_pie extends Component{
  render() {
    const { width , height , outerRadius , innerRadius} = size
    const { data } = this.props
    let piea = d3.layout.pie()
    let piedata = piea(data)
    let arc = d3.svg.arc()	//弧生成器
    .innerRadius(innerRadius)	//设置内半径
    .outerRadius(outerRadius)	//设置外半径
    let color = d3.scale.category10()
    return (
        <svg style={{ width: width , height : height }}>
          {piedata.map((value, index)=>
              <g key={index} transform={ `translate (${ width/2 } ,${ width/2 }) `}>
                <path d={ arc(value)} style={{ fill: color(index)}}/>
                  <text className={'MyText'} transform={`translate(${arc.centroid(value)})`}>
                    {value.data}
                  </text>
              </g>
          )}
        </svg>
    )
  }
}
