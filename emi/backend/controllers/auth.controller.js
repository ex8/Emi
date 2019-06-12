const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const me = (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
};

const login = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.json({ 
            success: false,
            err: `Body required in POST`
        });
    }
    User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) return res.json({
                success: false,
                message: `Incorrect username`
            });
            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const token = user.generateJwt();
                        return res.json({
                            success: true,
                            token
                        });
                    }
                    else {
                        return res.json({
                            success: false,
                            message: `Incorrect password`
                        });
                    }
                })
                .catch(err => res.json({
                    success: false,
                    err
                }));
        })
        .catch(err => res.json({
            success: false,
            err
        }));
};

const signup = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.json({ 
            success: false,
            err: `Body required in POST`
        });
    }
    User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password
        })
        .then(user => res.json({
            success: true,
            user
        }))
        .catch(err => res.json({
            success: false,
            err
        }));
};

module.exports = {
    me,
    login,
    signup
};