import axios from "axios";
import { BASE_URL } from "../../apiConfig";




const onLogin = (data) => (dispatch) => {
    dispatch({
        type: "GET_LOGIN_LOAD",
        isLoading: true
    })
    axios.post(`${BASE_URL}login`, data).then((res) => {
        localStorage.setItem("token", res.data.data.token)
        localStorage.setItem("role", res.data.data.roleName)
        dispatch({
            type: "GET_LOGIN_SUCCESS",
            payload: res.data.data.token,
            role : res.data.data.roleName,
            isLoading: false,
            isMessage: res.data.message
        })
        setTimeout(()=>{
            window.history.go(-1)
        }, 2000)
    }).catch((err)=> {
        dispatch({
            type: "GET_LOGIN_FAILED",
            payload: err.response.data.message,
            isLoading: false
        })
        window.alert(err.response.data.message)
    })
}

export default onLogin
