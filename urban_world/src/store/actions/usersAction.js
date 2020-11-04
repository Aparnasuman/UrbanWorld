import {GET_USERS, USERS_ERROR,SEARCH} from '../types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:3000/woodenItem`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
export function search(value) {
    return dispatch => dispatch({type: SEARCH, payload: value});
  }