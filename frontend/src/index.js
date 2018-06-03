import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

import App from './App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import * as actionCreators from './actions'

const mapStateToProps = (state) => {
  return {
    users: state.users,
    music: state.music
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

// console.log(store.getState())

const ReduxApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ReduxApp />
    </Router>
  </Provider>,
   document.getElementById('root'))
registerServiceWorker()
