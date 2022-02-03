var express = require('express');
var router = express.Router();

const Client = require('../models/client')
const Translator = require('../models/translator')
const Photo = require('../models/photo')
const Comment = require('../models/comment')


/* GET users listing. */


router.get("/", async (req, res) => {
 const query = {}

 if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }


 res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  const suliyat = await Translator.create({ name: 'suliyat' })
  const desire = await Translator.create({ name: 'desire' });
  const opeyemi = await Translator.create({ name: 'opeyemi' });

  const tobi = await Client.create({ name: "Tobi", age: 27 });
  const korewa = new Client.create({ name: "Korewa", age: 10 });
  const arinola = new Client.create({ name: "Arinola", age: 22 });

  const berlinPhoto = await Photo.create({ filename: 'berlin.jpg' })
  const munichPhoto = await Photo.create({ filename: 'munich.jpg' })


  // berlinPhoto.save()
  // munichPhoto.save()

  await suliyat.addPhoto(berlinPhoto);
  await suliyat.addPhoto(munichPhoto);

  console.log(suliyat)
  res.sendStatus(200)
})
router.get("/:userId", async (req, res) => {
  const client = await Client(req.params.clientId)
  
  
  if (client) res.render('client', {client })
  else res.sendStatus(404)
})

module.exports = router;
  //res.send(users[req.params.userId]);
