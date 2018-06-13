import { createStore, compose } from 'redux'

// REDUCERS
import reducers from '../reducers/index'

// REDUX DEV TOOLS
const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducers, enchancers)

export default store