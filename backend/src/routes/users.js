const express = require('express');

const router = express.Router();
const axios = require('axios')

const path = require('path')
const describeImage = require('../lib/image-description')
const downloadImage = require('../lib/download-image')

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


 res.send(await Client.find(query))
})

/* POST create a user */
router.post('/', async (req, res) => {
  const clientToCreate = {
    name: req.body.name,
    age: req.body.age,
  }

  const createdClient = await Client.create(clientToCreate)
  res.send(createdClient)
})

router.get('/initialize', async (req, res) => {
  try {
    // const berlinPhoto = await Photo.create({ filename: 'berlin.jpg' })
    //   const pictureRequest = await axios.get('https://picsum.photos/seed/${berlinphoto._id}/300/300')
    //   await downloadImage('https://picsum.photos/seed/${berlinphoto._id}/300/300', 'berlin.jpg')
    //   const imagePath = path.resolve(__dirname, '..', 'lib','images', 'berlin.jpg')

    //   const description = await describeImage(imagePath)
    //   berlinPhoto.filename = pictureRequest.request.path
    //   berlinPhoto.description = description
    //   berlinPhoto.save()
  

    //   const munichPhoto = await Photo.create({ filename: 'munich.jpg' })
    //   const pictureRequest2 = await axios.get('https://picsum.photos/seed/${munichphoto._id}/300/300')
    //   await downloadImage('https://picsum.photos/seed/${munichphoto._id}/300/300', 'munich.jpg')
    //   const imagePath2 = path.resolve(__dirname, '..', 'lib','images', 'munich.jpg')

    //   const description2 = await describeImage(imagePath2)
    //   munichPhoto.filename = pictureRequest2.request.path
    //   munichPhoto.description = description2
    //   munichPhoto.save()
  

    //     const suliyat = new Translator({ name: 'suliyat', email: 'suli@gmail.com' })
    //   await suliyat.setPassword('test')
    //   // await suliyat.addPhoto(berlinPhoto);
    //   // await suliyat.addPhoto(munichPhoto);
    // await suliyat.save()

    // const desire = new Translator({ name: 'desire', email: 'dessy@gmail.com' });
    // await desire.setPassword('test')
    // await desire.save()


    // const opeyemi = new Translator({ name: 'opeyemi', email: 'ope@gmail.com' });
    // await opeyemi.setPassword('test')
    // await opeyemi.save()

    const tobi = new Client({ name: "Tobi", age: 27, email: 'toby@gmail.com' });
    await tobi.setPassword('test')
    await tobi.save()

    const korewa = new Client({ name: "Korewa", age: 10, email: 'kore@gmail.com' });
    await korewa.setPassword('test')
    await korewa.save()

    const arinola = new Client({ name: "Arinola", age: 22, email: 'Arin@gmail.com' });
    await arinola.setPassword('test')
    await arinola.save()

  

    // berlinPhoto.save()
    // munichPhoto.save()



    console.log(suliyat)
    res.sendStatus(200)
    
      } catch (error) {
        console.log(error)
    res.status(500).json({error})
      }
})
router.post("/:clientId", async (req, res) => {
  const client = await Client(req.params.clientId)
  //const translator = await Translator(req.params.translatorId)
  const photo = await Photo.findById(req.body.photoId)
})

  router.get('/clientId', async (req, res) => {
  const client = await Client.findById(req.params.clientId)
//const translator = await Translator.findById(req.params.translatorId)
 
    if (client) res.send(client)
  else res.sendStatus(404)
})

router.get('/:clientId/json', async (req, res) => {
  const client = await Client.findById(req.params.clientId)
  res.send(client)
})

// router.get('/:translatorId/json', async (req, res) => {
//   const translator = await Translator.findById(req.params.clientId)
//   res.send(translator)
// })


module.exports = router;
  //res.send(users[req.params.userId]);
