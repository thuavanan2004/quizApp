import loginReducer from "./loginReducer";
import {combineReducers} from "redux";
import dataAnswers from "./dataAnswers";

const allReducer = combineReducers({
    loginReducer,
    dataAnswers
})
export default allReducer;