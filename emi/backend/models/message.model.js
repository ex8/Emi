const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid/v4');

const messageSchema = new Schema({
    uuid: {
        type: String,
        default: uuid()
    },
    data: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    anonymous: {
        type: Boolean,
        default: false
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: `User`,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: `User`,
        required: true
    }
});

const Message = mongoose.model(`Message`, messageSchema);
module.exports = Message;
