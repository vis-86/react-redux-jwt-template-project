import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggingIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
    case userConstants.LOGOUT:
      return {
        loggingIn: false,
        user: null
      };
    default:
      return state
  }
}