import axios from "axios";
import {BASE_URL} from "../../apiConfig.js"

export const getMenus = () => (dispatch) => {
    axios.get(`${BASE_URL}menus`).then((res) => {
        dispatch({
            type : "GET_MENU_SUCCESS",
            payload : res.data.data.Data,
            isLoading: false
        })
    }).catch((err) => {
        dispatch({
            type :"GET_MENU_FAIL",
            payload : err.message,
            isLoading: false,
        })
    })
}