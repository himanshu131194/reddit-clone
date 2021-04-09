import { LOGIN_SUCCESS, LOGIN_FAILURE } from './LoginActionTypes';

const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};

const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    };
};

export const loginAction = (email, password) => {
    return dispatch => {
        dispatch(loginSuccess({
            user: {name: 'himanshu'},
            error: null
        }));
    }
};

// const increment = () => {
//     return {
//         type: LOGIN_SUCCESS
//     }
// }

// const decrement = () => {
//     return {
//         type: LOGIN_FAILURE
//     }
// }

// export default {
//     increment,
//     decrement
// }