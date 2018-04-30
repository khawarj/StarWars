import * as types from "../actions/actionTypes";

export default function loginReducer(state = [] ,action){

    switch(action.type){

        case types.LOGIN_SUCCESS:
            return action.loginInfo;

        case types.LOGIN_FAILURE:
            return action.loginInfo;

        default :
            return state;
    }

}