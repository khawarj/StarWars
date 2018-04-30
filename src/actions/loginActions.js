import * as types from "./actionTypes";
import LoginApi from  '../api/loginApi';

export function loginSuccess(loginInfo){
  return { type: types.LOGIN_SUCCESS, loginInfo};
}

export function loginFailure(loginInfo){
    return { type: types.LOGIN_FAILURE, loginInfo};
}

export function login(userName, password){
  return function(dispatch) {
      return LoginApi.login(userName, password).then(loginInfo => {
          if(loginInfo) {
              loginInfo.isValid = true;
              dispatch(loginSuccess(loginInfo));
          }else{
              loginInfo = loginInfo || {};
              loginInfo.isValid = false;
              dispatch(loginFailure(loginInfo));
          }
      }).catch(err => {
          throw err;
      });
  };
}