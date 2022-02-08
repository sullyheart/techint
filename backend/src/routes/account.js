const express = require('express');
const passport = require('passport')

const Client = require('../models/client')
const Translator = require('../models/translator')

const router = express.Router();

/* GET home page. */
router.get('/session', (req, res,) => {
  res.send(req.session) //this returns your session if there is any
});


router.post('/', async (req, res, next) => {
  const { name, age, email, password } = req.body

  try {
    const client = await Client.register({ name, age, email }, password)
    res.send(client)
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  const { name, age, email, password } = req.body

  try {
    const translator = await Translator.register({ name, age, email }, password)
    res.send(translator)
  } catch (e) {
    next(e)
  }
})


router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.client)
})

// I am not sure how to implement the req.translator

router.delete('/session', async (req, res, next) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router;
