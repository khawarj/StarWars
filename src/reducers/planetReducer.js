import * as types from "../actions/actionTypes";

export default function planetReducer(state = [] ,action){

    switch(action.type){

        case types.PLANETS_SEARCH_SUCCESS:
            return action.planets;

        case types.PLANETS_SEARCH_FAILURE:
            return action.planets;

        default :
            return state;
    }

}