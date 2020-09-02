import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import {getErrorMessage} from './../_helpers'

export const userActions = {
    login,
    logout,
    getAll
};

function login(email, password) {
    return dispatch => {
        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/');
                },
                error => {
                    let msg = getErrorMessage(error);
                    dispatch(failure(msg));
                    dispatch(alertActions.error(msg));
                }
            );
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}