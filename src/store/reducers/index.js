import { combineReducers } from "redux";
import HomeReducer from './home.js';
import LoginReducer from './login.js';


const RootReducer = combineReducers({
    HomeReducer,
    LoginReducer
})

export default RootReducer