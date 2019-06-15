const Message = require('../models/message.model');
const User = require('../models/user.model');

const list = (req, res) => {
    Message
        .find({ recipient: req.user.id })
        .populate(`recipient`, `firstName lastName username created`)
        .populate(`user`, `firstName lastName username created`)
        .sort(`-created`)
        .then(messages => res.json({
            success: true,
            messages
        }))
        .catch(err => res.json({
            success: false,
            err
        }));
};

const add = (req, res) => {
    if (Object.keys(req.body) === 0) {
        return res.json({
            success: false,
            message: `Add message; POST required: data, anonymous?, recipient, user`
        });
    }
    Message.create({
            data: req.body.message,
            anonymous: req.body.anonymous,
            recipient: req.body.recipient,
            user: req.body.user
        })
        .then(message => res.json({
            success: true,
            message
        }))
        .catch(err => res.json({
            success: false,
            err
        }));
};

const remove = (req, res) => {
    Message.findOneAndDelete({ _id: req.params.id })
        .then(message => res.json({
            success: true,
            message
        }))
        .catch(err => res.json({
            success: false,
            err
        }));
};

const recipients = (req, res) => {
    User.find({ _id: { $ne: req.user.id } })
        .then(recipients => res.json({
            success: true,
            recipients
        }))
        .catch(err => res.json({
            success: false,
            err
        }));
};

module.exports = {
    list,
    add,
    remove,
    recipients
};
