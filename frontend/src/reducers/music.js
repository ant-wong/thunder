import * as types from '../constants/actionTypes'

const music = (state = [], action) => {
  switch(action.type) {
    // case types.ADD_SONG:
    //   return state
    case types.GET_ALLSONGS:
      return action.songs
    // case types.GET_SINGLESONG:
    //   return 
    // case types.EDIT_SONG:
    //   return
    // case types.DELETE_SONG:
    //   return
    default:
      return state
  }
}

export default music