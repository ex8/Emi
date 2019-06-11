const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const User = require('../models/user.model');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secret
};

passport.use(new JwtStrategy(opts, (payload, done) => {
    User.findById(payload.id)
        .then(user => {
            if (user) return done(null, user);
            done(null, false);
        })
        .catch(err => done(err, null));
}));

module.exports = passport;