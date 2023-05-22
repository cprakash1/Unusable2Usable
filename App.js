


const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const ejsMate = require('ejs-mate');



app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log('http://127.0.0.1:80/campground')
})