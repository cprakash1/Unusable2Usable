if(process.env.NODE_ENV!=="production"){
    require('dotenv').config()
}


const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');



app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));





const Db_Url='mongodb://127.0.0.1:27017/Unusable2Usable';
mongoose.connect(Db_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // strictQuery:true
    // useCreateIndex:true
    // useFindAndModify:true
});
const db = mongoose.Connection;
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once("open", () => {
    console.log('Database Connected');
});


app.listen(port, () => {
    console.log('http://127.0.0.1:80/campground')
})