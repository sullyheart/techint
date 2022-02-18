const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose');

const translatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
})

class Translator {
  async addPhoto(photo) {
    this.photos.push(photo)
    await this.save()
  }

}

translatorSchema.loadClass(Translator)
translatorSchema.plugin(autopopulate)
translatorSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})  //adds a username and a password and a couple of other things to your schema
  //I am trying to say username is my email, login with email
module.exports = mongoose.model('Translator', translatorSchema)

