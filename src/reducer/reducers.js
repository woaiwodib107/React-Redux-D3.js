import { combineReducers } from 'redux'
import { CHOOSETYPE, PAINT } from '../action/actions'

function getData(state = [] , action){
  console.log(action.data)
  switch (action.type) {
    case PAINT:
      return action.data
    default:
      return state
  }
}
function getType(state=0 , action){
  switch (action.type) {
    case CHOOSETYPE:
      return action.obj.bool ? state+action.obj.value : state-action.obj.value
    default:
      return state
  }
}
function getType_D3_pie(){

}
function getType_D3_histogram(){

}
function getType_D3_line(){}
const rootReducer = combineReducers({
  getData,
  getType
})

export default rootReducer
