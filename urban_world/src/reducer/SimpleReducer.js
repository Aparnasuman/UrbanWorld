export default (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
      case 'STARS_PENDING':
        return {
            ...state,
            pending: true
        }
        case 'STARS_FETCHED':
            const stars = state.stars || [];
            stars.push(action.payload)
            return {
                ...state,
                pending: false,
                stars
            }
     default:
      return state
    }
   }