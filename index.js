const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port= process.env.PORT || 3000;



app.listen(port,function(err){
    if(err){
        console.log(`server is getting error`)
    } else{
        console.log(`server is running on port ${port}`)
    }
})