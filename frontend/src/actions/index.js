import * as types from '../constants/actionTypes'
import axios from 'axios'

// USERS
export const addUser = (user) => (
  axios.post('http://localhost:6060/artists',
    user
  )
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    }),
  {
    type: types.ADD_USER,
    user
  }
)

// export const getOneUser = () => ({

// })

export const getAllUsers = (users) => ({
  type: types.GET_ALLUSERS,
  users
})

// export const editUser = () => {

// }

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