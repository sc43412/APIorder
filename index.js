const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const reader = require('xlsx');
const urlsave = require('./middleware/urlSave');

const port= process.env.PORT || 8000;
app.use(express.urlencoded({extended:true}));
const passport = require('passport');

const passportJwtStrategy=require('./config/passport-jwt-strategy');
app.use(urlsave.apisave);

app.use('/',require('./router'));



app.listen(port,function(err){
    if(err){
        console.log(`server is getting error`)
    } else{
        console.log(`server is running on port ${port}`)
    }
})