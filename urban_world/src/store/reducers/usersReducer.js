import {GET_USERS,SEARCH} from '../types'

const initialState = {
    users:[],
    value: '', 
    works: [],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        case SEARCH: {
            const value = action.payload;
            const works = state.users.filter((val) => val.name.includes(value));
            return {...state, value, works};
          }

        default: return state
    }

}
