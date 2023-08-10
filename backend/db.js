const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/iNotebook'
const connectToMongo = async () => {
    await mongoose.connect(mongoURI).then(() => console.log("Connecting TO Mongo Successfully"))
    .catch(err => console.log(err));
}
mongoose.set('strictQuery', false)
module.exports = connectToMongo;