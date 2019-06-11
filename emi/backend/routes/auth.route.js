const express = require('express');
const auth = require('../controllers/auth.controller');
const passport = require('passport');

const router = express.Router();

router.post(`/signup`, auth.signup);
router.post(`/login`, auth.login);
router.get(`/me`, passport.authenticate(`jwt`, { session: false }), auth.me);

module.exports = router;
