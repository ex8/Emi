import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';
import loginReducer from './login.reducer';
import logoutReducer from './logout.reducer';

export default combineReducers({
    signupReducer,
    loginReducer,
    logoutReducer
});
