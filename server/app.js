const express = require('express');
const userRoutes = require('./routes/user')

const app = express();

app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,PUT,DELETE,OPTIONS');
    next();
});

app.use((req,res,next)=> {
    console.log('First Middleware');
    next();
});

app.use("/api/user",userRoutes);
module.exports = app;