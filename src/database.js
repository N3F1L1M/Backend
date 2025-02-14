const mongoose = require('mongoose');


console.log(process.env.MONGODB_URU);
const URI = process.env.MONGODB_URU || 1;



mongoose.connect(URI, {
  //useNewUrlParser: true,
  //useCreateIndex: true 
});

 const connection = mongoose.connection;
 connection.once('open', () => {
   console.log("DB is connected");
 });