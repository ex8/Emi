import { LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../types';
import setAuthToken from '../setAuthToken';
import { setCurrentUser } from './login.actions';

export const logout = history => dispatch => {
    dispatch({ type: LOGOUT_REQUEST });
    setAuthToken(null);
    dispatch(setCurrentUser(null, false));
    localStorage.removeItem(`jwtToken`);
    dispatch({ 
        type: LOGOUT_SUCCESS,
     });
    history.push(`/login`);
};
