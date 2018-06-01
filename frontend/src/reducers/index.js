import { combineReducers } from 'redux'
import users from './users'
import music from './music'


const thunderData = combineReducers({
  users,
  music
})

export default thunderData