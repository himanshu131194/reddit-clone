import { combineReducers } from 'redux';
import { loginReducer } from '../containers/Auth/Login/LoginReducer';

export const rootReducer = combineReducers({
    user: loginReducer
});