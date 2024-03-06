import { combineReducers } from "redux";
import menuReducer from "../reducers/menuReducer"
import loginReducer from "../reducers/loginReducer";


export const reducers = combineReducers({
    menuReducer, loginReducer
})