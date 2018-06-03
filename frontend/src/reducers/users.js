import * as types from '../constants/actionTypes'

const users = (state = [], action) => {
  switch(action.type) {
    case types.ADD_USER:
      return [
        ...state,
        action.user
      ]
    case types.GET_ALLUSERS:
      return action.users
    case types.GET_SINGLEUSER:
      return action.user 
    // case types.EDIT_USER:
    //   // return
    // case types.DELETE_USER:
    //   // return
    default:
      return state
  }
}

export default users