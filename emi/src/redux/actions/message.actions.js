import { MESSAGES_REQUEST, MESSAGES_SUCCESS, MESSAGES_FAILURE, SET_SELECTED_MESSAGE, RESET_SELECTED_MESSAGE, DELETE_MESSAGE } from '../types';
import axios from 'axios';

export const list = () => dispatch => {
    dispatch({
        type: MESSAGES_REQUEST,
        loading: true
    });
    axios.get(`/api/messages`)
        .then(res => {
            if (res.data.success) {
                dispatch({
                    type: MESSAGES_SUCCESS,
                    messages: res.data.messages,
                    loading: false
                });
            }
            else {
                dispatch({
                    type: MESSAGES_FAILURE,
                    errorMessage: res.data.err.errmsg,
                    loading: false
                });
            }
        })
        .catch(err => dispatch({
            type: MESSAGES_FAILURE,
            loading: false,
            errorMessage: `Cannot fetch messages...`
        }));
};

export const setSelectedMessage = message => dispatch => {
    dispatch({
        type: SET_SELECTED_MESSAGE,
        message
    });
    // dispatch(deleteMessage(message));
};

export const deleteMessage = message => dispatch => {
    axios.delete(`/api/messages/${message._id}`)
        .then(res => {
            if (res.data.success) {
                dispatch({
                    type: DELETE_MESSAGE
                });
                dispatch(list());
            }
            else {
                dispatch({
                    type: MESSAGES_FAILURE,
                    errorMessage: res.data.err.errmsg
                });
            }
        })
        .catch(err => dispatch({
            type: MESSAGES_FAILURE,
            errorMessage: `Cannot delete message...`
        }));
}

export const resetSelectedMessage = () => dispatch => {
    dispatch({
        type: RESET_SELECTED_MESSAGE,
        selectedMessage: {}
    });
};
