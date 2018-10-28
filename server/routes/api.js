const express = require('express');
const axios = require('axios');
const scrapper = require('../modules/scrapper');

const router = express.Router();

const API_KEY = '616fa7cc408843cdaee31d0f78fa3a18';
const BING_SEARCH_API_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/search';
const PUPPETEER_SERVICE = 'http://localhost:3001/puppeteer-service';

// http://localhost:3001/puppeteer-service
// http://128.199.163.48:30001/puppeteer-service

/* GET users listing. */
router.get('/', async (req, res, next) => {

  if (!req.query.q) {
    res.status(400);
    return res.send({
      status: 'fail',
      error: 'Please specify a query',
    });
  }

  const q = `site:stackoverflow.com ${req.query.q}`;
  const offset = req.query.offset || 0;
  const response = await axios.get(`${BING_SEARCH_API_URL}?q=${q}&offset=${offset}`, {
    headers: { 'Ocp-Apim-Subscription-Key': API_KEY },
  });

  const urls = response.data.webPages.value.map(((v) => v.url.match(/[0-9]+/)[0] || null));

  res.end('test');
  try {
    const data = await axios.post(PUPPETEER_SERVICE, {
      urls,
    });

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
