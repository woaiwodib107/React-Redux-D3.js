import React , {Component , PropTypes } from 'react'
import {D3_type} from '../action/actions'

export default class ChooseType extends Component {
  render(){
    const { SHOW_D3_PIE, SHOW_D3_LINE,SHOW_D3_HISTOGRAM , SHOW_D3_CURVE , SHOW_D3_POINT}=D3_type
    return (
      <div>
        <input onChange={(e)=>this.handleChange(e)} type="checkbox" value={SHOW_D3_PIE} />D3_pine
        <input onChange={(e)=>this.handleChange(e)} type="checkbox" value={SHOW_D3_HISTOGRAM} />D3_histogram
        <input onChange={(e)=>this.handleChange(e)} type="checkbox" value={SHOW_D3_LINE} />D3_line
        <input onChange={(e)=>this.handleChange(e)} type="checkbox" value={SHOW_D3_CURVE} />D3_curve
        <input onChange={(e)=>this.handleChange(e)} type="checkbox" value={SHOW_D3_POINT} />D3_point
      </div>
    )
  }
  handleChange(e){
    this.props.onChooseType({value:parseInt(e.target.value),bool:e.target.checked})
  }
}
