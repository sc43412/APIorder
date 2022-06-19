const mongoose = require('mongoose');

const db =main().then(()=>console.log(`mongoose connected successfully`)).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
    return mongoose.connection;
}
module.exports=db;
