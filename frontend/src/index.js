import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'redux'
// import { createStore } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// IMPORT STORE
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
   document.getElementById('root'))
registerServiceWorker()
