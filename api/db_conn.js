const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inventory-system').then(()=>{
  console.log('successfully connected to the database')
}).catch((err)=>{
  console.log('An error occured: '+err);
})