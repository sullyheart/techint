var express = require('express');
var router = express.Router();

const Client = require('../models/client')
const Translator = require('../models/translator')

const suliyat = new Translator("Suliyat");
const desire = new Translator("Desire");
const opeyemi = new Translator("Opeyemi");

const tobi = new Client("Tobi", 27);
const korewa = new Client("Korewa", 10);
const arinola = new Client("Arinola", 22);

suliyat.addPhoto('naijaphoto.jpg');
suliyat.addPhoto('berlinphoto.jpg');



desire.bio = "";
tobi.bio = "";

opeyemi.comment = "";
arinola.comment = "";

const clients = [tobi, korewa, arinola]



/* GET users listing. */


router.get("/", function (req, res, next) {
  let result = users

  if (req.query.name) {
    return res.send(users.filter((user) => user.name == req.query.name));
  } /*if we have a name query, send the user
   with that name as a response*/

  res.send(users);
});

router.get("/:userId", function (req, res, next) {
  const user = users[req.params.userId]
  if (user) res.send(user)
  else res.sendStatus(404)
  })
  //res.send(users[req.params.userId]);


/*router.get("/steve", function (req, res, next) {
  res.send(users[1]);
}); this isnt good. we should
 introduce the use of parameters*/

module.exports = router;
