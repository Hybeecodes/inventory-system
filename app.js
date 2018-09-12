const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const index = require('./api//routes/index');
const passport = require('passport');
require('./api/db_conn');
const app = express();

// const index = require('./ap')
// tell the server to look for static files in the dist folder


// link body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(logger('dev'));
// app.use(passport.session());

// app.use('/api',admin); // redirect any admin request to the admin route file
app.use('/api',index);

app.use(express.static(path.join(__dirname,'dist')));
// console.log(day)
// tell server to go to the dist folder index.html for all routes
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
})

const port = process.env.PORT || '4000';
app.set('port',port);

app.listen(port,()=>{
  console.log('server running ');
})


