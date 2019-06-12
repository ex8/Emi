import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_RESET } from '../types';
import axios from 'axios';

export const signup = ({ firstName, lastName, username, password, password2 }) => dispatch => {
    dispatch({
        type: SIGNUP_REQUEST,
        loading: true
    });
    if (password === password2) {
        axios.post(`/api/auth/signup`, { firstName, lastName, username, password })
            .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: SIGNUP_SUCCESS,
                        loading: false,
                        successMessage: `Account successfully created. You may now login.`
                    });
                }
                else {
                    dispatch({
                        type: SIGNUP_FAILURE,
                        loading: false,
                        errorMessage: res.data.err.errmsg
                    });
                }
            })
            .catch(err => dispatch({
                type: SIGNUP_FAILURE,
                loading: false,
                errorMessage: `You cannot signup at this time.`
            }))
    }
    else {
        dispatch({
            type: SIGNUP_FAILURE,
            loading: false,
            errorMessage: 'Passwords do not match. Please try again.'
        });
    }
};

export const reset = () => {
    return {
        type: SIGNUP_RESET,
        loading: false,
        successMessage: null,
        errorMessage: null
    };
}