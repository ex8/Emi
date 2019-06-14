import { RECIPIENTS_REQUEST, RECIPIENTS_SUCCESS, RECIPIENTS_FAILURE } from '../types';

const INITIAL_STATE = {
    recipients: []
};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case RECIPIENTS_REQUEST:
            return {
                ...state
            };
        case RECIPIENTS_SUCCESS:
            return {
                ...state,
                recipients: action.recipients
            };
        case RECIPIENTS_FAILURE:
            return {
                ...state
            };
        default:
            return state;
    };
};
