import React,{ Component , PropTypes } from 'react'
import ReactDOM from 'react-dom'
import d3 from './d3/d3.js'
export default class D3_axis extends Component{
  componentDidMount() {
    // let node=ReactDOM.findDOMNode(this)
    // let gx=node.getElementsByClassName('axis')[0]
    // let gy=node.getElementsByClassName('axis')[1]
    // // let g=node.getElementsByClassName('g')
    // // console.log('g'+g)
    // d3.select(gx).call(xAxis)
    // d3.select(gy).call(yAxis)
          const { xScale , yScale } = this.props
          let xAxis = d3.svg.axis()
          .scale(xScale)
          .orient('bottom')
          //定义y轴
          let yAxis = d3.svg.axis()
          .scale(yScale)
          .orient('left')
          // let node=ReactDOM.findDOMNode(this)
          // let gx=node.getElementsByClassName('axis')[0]
          // let gy=node.getElementsByClassName('axis')[1]
          // let g=node.getElementsByClassName('g')
          // console.log('g'+g)
          let gx=ReactDOM.findDOMNode(this.refs.gx)
          let gy=ReactDOM.findDOMNode(this.refs.gy)
          d3.select(gx).call(xAxis)
          d3.select(gy).call(yAxis)
  }


  //当状态更新时,添加坐标轴相关信息，
  componentDidUpdate() {
      //没想好的地方 render中获得的props的x轴y轴的比例尺和其它信息在不同组件中是不一样的 不能定义为全局
      const { xScale , yScale } = this.props
      let xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      //定义y轴
      let yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      // let node=ReactDOM.findDOMNode(this)
      // let gx=node.getElementsByClassName('axis')[0]
      // let gy=node.getElementsByClassName('axis')[1]
      // let g=node.getElementsByClassName('g')
      // console.log('g'+g)
      let gx=ReactDOM.findDOMNode(this.refs.gx)
      let gy=ReactDOM.findDOMNode(this.refs.gy)
      d3.select(gx).call(xAxis)
      d3.select(gy).call(yAxis)
  }
  render(){
    // const { xScale , yScale } = this.props
    const { width , height} =this.props.size
    const { left , right , top , bottom } = this.props.padding
    // //定义x轴
    // console.log(xScale)
    // xAxis = d3.svg.axis()
    // .scale(xScale)
    // .orient('bottom')
    // //定义y轴
    // yAxis = d3.svg.axis()
    // .scale(yScale)
    // .orient('left')
    return(
      <g>
        <g className={'axis'} ref='gx' transform = { `translate( ${left} , ${height - bottom})`}/>
        <g className={'axis'} ref='gy' transform = { `translate( ${left} , ${top})`}/>
      </g>
    )
  }
}
