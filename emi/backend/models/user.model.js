const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre(`save`, function(next) {
    if (!this.isModified(`password`)) return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, (err, hashed) => {
            if (err) return next(err);
            this.password = hashed;
            next();
        });
    })
});

userSchema.methods.generateJwt = function() {
    const payload = {
        id: this.id,
        username: this.username
    };
    return jwt.sign(payload, keys.secret, { expiresIn: `3h` });
};

const User = mongoose.model(`User`, userSchema);
module.exports = User;