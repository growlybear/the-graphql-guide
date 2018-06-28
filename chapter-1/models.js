const mongoose = require('mongoose')

const projectDB = 'graphqlguide'

// connect to the db
mongoose.connect(`mongodb://localhost/${projectDB}`)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log(`👌 Connected to MongoDB: ${projectDB}`);
});

// create a User schema to be stored in the MongoDB database
const UserSchema = new mongoose.Schema({
  _id: String,  // default id field for mongodb
  username: String
})

// turn that schema into a model that we can query
// (model name will be lowercased and pluralized for the users collection)
const User = mongoose.model('User', UserSchema)

module.exports = { User }
