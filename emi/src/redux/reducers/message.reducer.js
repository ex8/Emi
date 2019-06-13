import { MESSAGES_REQUEST, MESSAGES_SUCCESS, MESSAGES_FAILURE, SET_SELECTED_MESSAGE, RESET_SELECTED_MESSAGE } from '../types';

const INITIAL_STATE = {
    loading: true,
    messages: [],
    selectedMessage: {},
    errorMessage: ''
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case MESSAGES_REQUEST:
            return {
                ...state,
                loading: action.loading
            };
        case MESSAGES_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                messages: action.messages
            };
        case MESSAGES_FAILURE:
            return {
                ...state,
                loading: action.loading,
                errorMessage: action.errorMessage
            };
        case SET_SELECTED_MESSAGE:
            return {
                ...state,
                selectedMessage: action.message
            };
        case RESET_SELECTED_MESSAGE:
            return {
                ...state,
                selectedMessage: action.selectedMessage
            }
        default:
            return state;
    };
};
