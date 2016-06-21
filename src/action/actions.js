
import fetch from 'isomorphic-fetch'

/*
 * action 类型
 */

export const PAINT = 'PAINT'
export const CHOOSETYPE = 'CHOOSETYPE'
// export const ADD_TODO = 'ADD_TODO';
// export const COMPLETE_TODO = 'COMPLETE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */
export const D3_type={
  SHOW_D3_PIE: 1,
  SHOW_D3_HISTOGRAM: 2,
  SHOW_D3_LINE: 4,
  SHOW_D3_CURVE: 8,
  SHOW_D3_POINT: 16
}
export const size={
  width: 400,
  height: 400,
  outerRadius: 150,
  innerRadius:50
}
export const padding={
  left: 30,
  right: 30,
  top: 20,
  bottom: 20
}
/*
 * action 创建函数
 */

export function paint(data){
  return { type : PAINT , data}
}
export function choosetype(obj){
  return {type: CHOOSETYPE , obj}
}
export function fetchPosts(reddit) {
  return dispatch => {
    return fetch(reddit)
      .then(response => response.json())
      .then(json => dispatch(paint(json)))
  }
}
// //获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
// function fetchPosts(reddit) {
//   return dispatch => {
//     dispatch(requestPosts(reddit))
//     return fetch(`https://www.reddit.com/r/${reddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(reddit, json)))
//   }
// }

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }
//
// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index }
// }
//
// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }
