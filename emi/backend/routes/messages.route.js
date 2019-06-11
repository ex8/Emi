const express = require('express');
const messages = require('../controllers/messages.controller');
const passport = require('passport');

const router = express.Router();

router.get(`/`, passport.authenticate(`jwt`, { session: false }), messages.list);
router.post(`/`, passport.authenticate(`jwt`, { session: false }), messages.add);
router.delete(`/:id`, passport.authenticate(`jwt`, { session: false }), messages.remove);
router.get(`/recipients`, passport.authenticate(`jwt`, { session: false }), messages.recipients);

module.exports = router;
