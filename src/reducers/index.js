import {combineReducers} from "redux";

import login from "./loginReducer";
import planets from "./planetReducer";

const rootReducer = combineReducers({
    login,
    planets
});

export default rootReducer;