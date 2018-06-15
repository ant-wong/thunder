import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// REDUCERS
import reducers from '../reducers/index'

// REDUX DEV TOOLS
const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducers, enchancers, applyMiddleware(thunk))

export default store