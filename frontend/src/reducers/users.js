import * as types from '../constants/actionTypes'

const users = (state = [], action) => {
  switch(action.type) {
    case types.ADD_USER:
      // axios.post('http://localhost:6060/artists', 
      //   action.user
      // )
      // .then((res) => {
      //   return state.concat([
      //     res.data
      //   ])
      // })
      // .catch((error) => {
      //   console.log(error)
      // })
      // return Object.assign({}, state, 
      //   action.user
      // )
      return state.concat([
        action.user
      ])
    case types.GET_ALLUSERS:
      return action.users
    // case types.GET_SINGLEUSER:
    //   // return 
    // case types.EDIT_USER:
    //   // return
    // case types.DELETE_USER:
    //   // return
    default:
      return state
  }
}

export default users