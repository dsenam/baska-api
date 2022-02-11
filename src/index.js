require('dotenv').config()
const express = require('express')
const routes = require('./routes');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', routes);


const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@localhost:27017/admin?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
).then(() => {
    app.listen(3333)
    console.log('Sucess!')
}).catch((err) => console.log(err));

