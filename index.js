const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const { db } = require('./config/database');
const port = 8081;
const app = express();
const path = require('path');


app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(express.static(path.join(__dirname + '/assets')));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routers'));


app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("Server Started on Port \nhttp://localhost:" + port);
    }
})