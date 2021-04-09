import { LOGIN_SUCCESS, LOGIN_FAILURE } from './LoginActionTypes';

// const initialState = {
//     user: null,
//     error: null
// };

// const loginReducer = (state = {}, action) => {
//     switch(action.type){
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 user: action.payload,
//                 loggedIn: true
//             }
//         case LOGIN_FAILURE:
//             return {
//                 ...state,
//                 user: {},
//                 loggedIn: false
//             }
//         default:
//             return state
//     }
// }


export const loginReducer = (state = 1, {type, payload}) => {
    console.log(payload);
    switch(type){
        case LOGIN_SUCCESS:
            return state + 1
        case LOGIN_FAILURE:
            return state - 1
        default: 
            return state
    }
}
