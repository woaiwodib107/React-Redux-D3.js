import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import D3_layout from './containers/D3_layout'
import configureStore from './store/configureStore'

let store = configureStore()

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <D3_layout />
  </Provider>,
  rootElement
)
