const express = require('express');

const app = express();

const snackRoutes = require('./routes/snacks');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

//console.log(snacks);
//console.log(mongoose.model('snackModel'));

mongoose.connect('mongodb://0.0.0.0:27017/snacks').then(x=> console.log("Database connected"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());
//app.use(cookieParser());

app.use('/snacks',snackRoutes);



app.listen(5009,()=>{
    console.log("This server is listening on port 5009");
})

