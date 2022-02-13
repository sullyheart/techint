const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/session', (req, res,) => {
  res.send(req.session) //this returns your session if there is any
})

router.get('/bootstrap', (req, res) => {
  res.render('bootstrap', { title: 'bootstrap' })
})


module.exports = router;
