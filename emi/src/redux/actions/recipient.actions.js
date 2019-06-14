import { RECIPIENTS_REQUEST, RECIPIENTS_SUCCESS, RECIPIENTS_FAILURE } from '../types';
import axios from 'axios';

export const getRecipients = () => dispatch => {
    dispatch({
        type: RECIPIENTS_REQUEST
    });
    // { value: '', label: '' }
    axios.get(`/api/messages/recipients`)
        .then(res => {
            if (res.data.success) {
                dispatch({
                    type: RECIPIENTS_SUCCESS,
                    recipients: res.data.recipients.map(r => ({
                        value: r._id,
                        label: `${r.firstName} ${r.lastName} (@${r.username})`,
                        username: r.username
                    }))
                });
            }
            else {
                dispatch({
                    type: RECIPIENTS_FAILURE
                });
            }
        })
        .catch(err => dispatch({
            type: RECIPIENTS_FAILURE
        }));
};
