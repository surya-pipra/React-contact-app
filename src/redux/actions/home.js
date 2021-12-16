import homeTypes from "../types/home";

function LoginUser(payload) {
  return {
    type: homeTypes.LOGIN_USER,
    payload
  }
}

function LoginUserSuccess(payload) {
  return {
    type: homeTypes.LOGIN_USER_SUCCESS,
    payload
  }
}
function LoginError(payload) {
  return {
    type: homeTypes.LOGIN_ERROR,
    payload
  }
}

export default {
  LoginUser,
  LoginUserSuccess,
  LoginError
};
