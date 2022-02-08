const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: String,
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
      autopopulate: true,
    },
  ],
  comment: [
    {
       type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      autopopulate: true,
    },
  ],
})

class Client {
  async addPhoto(photo) {
    this.photos.push(photo)
    await this.save()
  }

}

clientSchema.loadClass(Client)
clientSchema.plugin(autopopulate)
Client.plugin(passportLocalMongoose);//adds a username and a password and a couple of other things to your schema
clientnameField: 'email',
  //I am trying to say username is my email, login with email
module.exports = mongoose.model('Client', clientSchema)
