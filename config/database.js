//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/BlockVotes';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.Promise = global.Promise;
module.exports = mongoose;
//mongodb: //localhost:27017/BlockVotes