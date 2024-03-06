const loginState = {
    loading: false,
    error : "",
    token: "",
    role:"",
    message:""
}

const loginReducer = (state = loginState, action) => {
switch(action.type) {
        case "GET_LOGIN_LOAD":
        return {
            ...state,
            loading: action.isLoading,
        }

        case "GET_LOGIN_SUCCESS":
        return {
            ...state,
            token: action.payload,
            role: action.isRole,
            loading: action.isLoading,
            message: action.isMessage
        }

        case "GET_LOGIN_FAILED":
        return {
            ...state,
            error: action.payload,
            loading: action.isLoading
        }
    
        default:
            return state
}
}

export default loginReducer