import * as types from "./actionTypes";
import api from  '../api/swapApi';

export function planetsSearchSuccess(planets){
    return { type: types.PLANETS_SEARCH_SUCCESS, planets};
}

export function planetsSearchFailure(loginInfo){
    return { type: types.PLANETS_SEARCH_FAILURE, loginInfo};
}

export function searchPlanets(searchQuery){
    return function(dispatch) {
        return api.searchPlanets(searchQuery).then(planets => {
            dispatch(planetsSearchSuccess(planets));
        }).catch(err => {
            throw err;
        });
    };
}