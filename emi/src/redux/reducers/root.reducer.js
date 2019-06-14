import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';
import loginReducer from './login.reducer';
import logoutReducer from './logout.reducer';
import messageReducer from './message.reducer';
import recipientReducer from './recipient.reducer';

export default combineReducers({
    signupReducer,
    loginReducer,
    logoutReducer,
    messageReducer,
    recipientReducer
});
