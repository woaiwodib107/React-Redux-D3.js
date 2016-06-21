import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts,choosetype} from '../action/actions'
import D3_pie from '../components/D3_pie'
import D3_histogram from '../components/D3_histogram'
import D3_line from '../components/D3_line'
import ChooseData from '../components/ChooseData'
import ChooseType from '../components/ChooseType'
import ChartShow from '../components/ChartShow'
class D3_layout extends Component {
  render(){
    const { dispatch , getData ,getType} = this.props
    // console.log('getType'+getType)
    return (
      <div>
        <ChooseData
          onChooseData={text => dispatch(fetchPosts(text)) }
          />
        <ChooseType
          onChooseType={obj=> dispatch(choosetype(obj))}//{{value:e.target.value,bool:e.target.checked}}
          />
        <ChartShow getType={getType} getData={getData}/>
      </div>
    )
  }
}

//reducers中的函数
function select(state) {
  return {
    getData: state.getData,
    getType: state.getType
  }
}
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(D3_layout)
