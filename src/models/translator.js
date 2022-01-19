class Translator {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.bio = "";
    this.comment = [];
    this.photos = [];
  }
  greet(translator) {
    console.log();
  }
  addPhoto(photo) {
    this.photos.push(photo);
  }
  likePhoto(photo) {
    photo.likedBy.push(this);
  }
}
module.exports = Translator



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
