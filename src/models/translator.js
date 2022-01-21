const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const translatorSchema = new mongoose.Schema({
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
})

class Translator {
  async addPhoto(photo) {
    this.photos.push(photo)
    await this.save()
  }

}

translatorSchema.loadClass(Translator)
translatorSchema.plugin(autopopulate)

module.exports = mongoose.model('Translator', translatorSchema)



/*class Translator {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.bio = "";
    this.comment = [];
    this.photos = [];
  }
  greet() {
    console.log();
  }
  addPhoto(photo) {
    this.photos.push(photo);
  }
  likePhoto(photo) {
    photo.likedBy.push(this);
  }
}
module.exports = Translator*/

/*get profile() {
    return `
# ${this.name} (${this.email})
 BIO: ${this.bio}

 ## ${'Photos'} (${this.photos.length})
  
  ${this.photos
    .map(photo => {
      return `### ${photo.filename}
      ${photo.likedBy.map(person => person.name).join(',') || 'no likes yet!'}
      `
    })
}
  }*/
