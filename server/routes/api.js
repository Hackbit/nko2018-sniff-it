const express = require('express');

const axios = require('axios');

const router = express.Router();

const API_KEY = '616fa7cc408843cdaee31d0f78fa3a18';
const BING_SEARCH_API_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/search';

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const q = `site:stackoverflow.com ${req.query.q}`;
  const offset = req.query.offset || 0;
  const response = await axios.get(`${BING_SEARCH_API_URL}?q=${q}&offset=${offset}`, {
    headers: { 'Ocp-Apim-Subscription-Key': API_KEY },
  })
  const urls = response.data.webPages.value.map(((v) => v.url));
  // call SO scraper here
  res.send(urls);
});

module.exports = router;
