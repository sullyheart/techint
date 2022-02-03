const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

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

module.exports = mongoose.model('Client', clientSchema)



/*class Client {
  constructor(name, age) {
    this.age = age;
    this.name = name;
    this.bio = "";
    this.comment = [];
    this.photos = [];
    
  }
}

module.exports = Client*/