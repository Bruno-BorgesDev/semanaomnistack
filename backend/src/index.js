const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://BrunoBorges:omnistack@cluster0-jg3jw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});    

app.use(express.json());
app.use(routes);

app.listen(3333);

