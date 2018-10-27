const express = require('express');
const axios = require('axios');
const scrapper = require('../modules/scrapper');
const router = express.Router();


/* GET users listing. */
router.post('/', async (req, res, next) => {

  if (!req.body.urls) {
    res.status(400);
    return res.send({
      status: 'fail',
      error: 'Please specify urls',
    });
  }

  try {
    const data = await scrapper(req.body.urls);
    res.status(200);
    res.send({
      status: 'success',
      data,
    });
  } catch (e) {
    res.status(500);
    res.send({
      status: 'fail',
      error: `Internal Server Error: ${e.message}`,
    });
  }
});

module.exports = router;
