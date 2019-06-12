import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET, SET_CURRENT_USER } from '../types';
import axios from 'axios';
import setAuthToken from '../setAuthToken';
import jwtDecode from 'jwt-decode';

export const login = ({ username, password }, history) => dispatch => {
    dispatch({
        type: LOGIN_REQUEST,
        loading: true
    });
    axios.post(`/api/auth/login`, { username, password })
        .then(res => {
            if (res.data.success) {
                const { token } = res.data;
                setAuthToken(token);
                const decoded = jwtDecode(token);
                localStorage.setItem(`jwtToken`, token);
                dispatch(setCurrentUser(decoded, true));
                dispatch({
                    type: LOGIN_SUCCESS,
                    loading: false,
                    successMessage: `Account successfully loogged in.`
                });
                history.push(`/inbox`);
            }
            else {
                dispatch({
                    type: LOGIN_FAILURE,
                    loading: false,
                    errorMessage: `${res.data.message}. Please try again`
                });
            }
        })
        .catch(err => dispatch({
            type: LOGIN_FAILURE,
            loading: false,
            errorMessage: `Cannot login at this time.`
        }));
}

export const setCurrentUser = (user, isAuthenticated) => {
    return {
        type: SET_CURRENT_USER,
        isAuthenticated,
        user
    };
};

export const reset = () => {
    return {
        type: LOGIN_RESET,
        loading: false,
        successMessage: '',
        errorMessage: ''
    };
};
