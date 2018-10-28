const axios = require('axios');

const API_KEY = '616fa7cc408843cdaee31d0f78fa3a18';
const BING_SEARCH_API_URL = 'https://api.cognitive.microsoft.com/bing/v7.0/search';

const searchBing = async (query, options) => {
  const q = `site:stackoverflow.com ${query}`;
  const { offset } = options;
  const url = `${BING_SEARCH_API_URL}?q=${q}&offset=${offset}`;
  
  return await axios.get(url, {
    headers: {
      'Ocp-Apim-Subscription-Key': API_KEY,
    },
  });
};

module.exports = searchBing;
