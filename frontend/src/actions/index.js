import * as types from '../constants/actionTypes'
import axios from 'axios'

// USERS
export const addUser = (user) => ({
  type: types.ADD_USER,
  user
})

// API CALL
// export const getOneUser = (id) => {
//   return(dispatch) => {
//     return axios.get(`htt://localhost:6060/artists/${id}`)
//       .then((res) => {
//         console.log(res)
//         dispatch(loadUser(res.data))
//       })
//   }
// }

export const loadUser = (user) => ({
  type: types.GET_SINGLEUSER,
  user
})

// API CALL
export const getAllUsers = () => {
  return (dispatch) => {
    return axios.get('http://localhost:6060/artists')
      .then((res) => {
        dispatch(loadUsers(res.data))
      })
  }
}

/* DONE */
export const loadUsers = (users) => ({
  type: types.GET_ALLUSERS,
  users
})

// API CALL
export const loginUserData = (user) => {
  return (dispatch) => {
    return axios.put(`http://localhost:6060/artists/${user.id}`, {
      values: user,
      logged_in: true
    })
    .then((res) => {
      dispatch(editUser(res.data))
    })
  }
}

export const editUser = (user) => ({
  type: types.EDIT_USER,
  user
})

// export const deleteUser = () => {

// }

// export const 

// // MUSIC
// export const addSong = () => {

// }

// export const getOneSong = () => {
  
// }

// export const getAllSongs = () => {

// }

// export const editSong = () => {

// }

// export const deleteSong = () => {

// }