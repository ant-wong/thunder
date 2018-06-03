import { createStore, compose } from 'redux'
// import axios from 'axios'

// REDUCERS
import reducers from '../reducers/index'

// REDUX DEV TOOLS
const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// const initialState = axios.get('http://localhost:6060/artists')
//   .then((res) => {
//     return res.data
//   })

// console.log(initialState)

const store = createStore(reducers, enchancers)

export default store