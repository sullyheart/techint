const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/session', (req, res,) => {
  res.send(req.session) //this returns your session if there is any
});

module.exports = router;
