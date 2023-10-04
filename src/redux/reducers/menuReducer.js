const menuState ={
    data: [],
    loading : false,
    error : null
}

const menuReducer = (state = menuState, action) => {
    switch (action.type){
        case "GET_MENU_SUCCESS" : 
        return {
            ...state,
            data : action.payload,
            loading : false,
        }
        case "GET_MENU_FAIL" :
        return {
            ...state,
            loading : false,
            error : action.payload
        }
        default:
             return state
    }
}

export default menuReducer