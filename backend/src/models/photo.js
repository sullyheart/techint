
/*class Photo {
  constructor(filename) {
    this.filename = filename;
    this.likedBy = [];
  }
}
module.exports = Photo;*/

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const photoSchema = new mongoose.Schema({
  filename: String,
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
  description: Object,
})

photoSchema.plugin(autopopulate)
module.exports = mongoose.model('Photo', photoSchema)
