const mongoose = require('mongoose')
//library is called mongoose(odm)
//ensure we are conted to our mongodb
// and be able to run queries

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
let connectionString = process.env.MONGODB_CONNECTION_STRING
// console.log( process.env)


if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@cluster0.feaxc.mongodb.net/${dbName}?retryWrites=true&w=majority`
}

mongoose.set('debug', true)

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })  .then(() => console.log('connection established')).catch(console.log)
//the database connection should only create a connection, it shouldnt do anything else.
module.exports = mongoose.connection

