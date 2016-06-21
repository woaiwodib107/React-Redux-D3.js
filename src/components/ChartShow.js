import React , { Component , PropTypes } from 'react'
import { D3_type} from '../action/actions'
import D3_pie from '../components/D3_pie'
import D3_histogram from '../components/D3_histogram'
import D3_line from '../components/D3_line'
import D3_curve from '../components/D3_curve'
import D3_point from '../components/D3_point'
const { SHOW_D3_PIE, SHOW_D3_LINE,SHOW_D3_HISTOGRAM , SHOW_D3_CURVE , SHOW_D3_POINT}=D3_type
export default class ChartShow extends Component{
  render(){
    const {getType, getData}=this.props
    return (
      <div>
        {this.show_D3_pie(getType,getData)}
        {this.show_D3_histogram(getType,getData)}
        {this.show_D3_line(getType,getData)}
        {this.show_D3_curve(getType,getData)}
        {this.show_D3_point(getType,getData)}
      </div>
    )
  }
  show_D3_pie(getType,getData){
    return getType & SHOW_D3_PIE ? <D3_pie data={getData}/> : null
  }
  show_D3_histogram(getType,getData){
      return getType & SHOW_D3_HISTOGRAM ? <D3_histogram data={getData}/> : null
  }
  show_D3_line(getType,getData){
      return getType & SHOW_D3_LINE ? <D3_line data={getData}/> : null
  }
  show_D3_curve(getType,getData){
      return getType & SHOW_D3_CURVE ? <D3_curve data={getData}/> : null
  }
  show_D3_point(getType,getData){
      return getType & SHOW_D3_POINT ? <D3_point data={getData}/> : null
  }
}
