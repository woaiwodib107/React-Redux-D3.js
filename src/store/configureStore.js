
import { createStore, applyMiddleware,compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducer/reducers'

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   createLogger()
// )(createStore)

export default function configureStore(initialState) {
  // const store = createStoreWithMiddleware(rootReducer, initialState)
  const store = createStore(
    rootReducer,
    initialState,compose(
      applyMiddleware(thunkMiddleware,createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f=>f));
    // Enable Webpack hot module replacement for reducers
    if(module.hot){
    module.hot.accept('../reducer/reducers', () => {
      const nextRootReducer = require('../reducer/reducers')
      store.replaceReducer(nextRootReducer)
    })}
  return store
}
