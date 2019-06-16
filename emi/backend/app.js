const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const keys = require('./config/keys');

const authRouter = require('./routes/auth.route');
const messagesRouter = require('./routes/messages.route');
const accountRouter = require('./routes/account.route');

const app = express();

mongoose.connect(keys.mongoUrl, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log(`MongoDB connected...`))
    .catch(err => console.error(`MongoDB connection error: ${err}`));

app.use(logger(`dev`));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(passport.initialize());

app.use(`/api/auth`, authRouter);
app.use(`/api/messages`, messagesRouter);
app.use(`/api/account`, accountRouter);

app.use((req, res) => res.sendStatus(500));

app.listen(4000, () => console.log(`Express running...`));