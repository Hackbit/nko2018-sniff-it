const express = require('express');
const searchBing = require('../modules/bing.api');
const { getCodes } = require('../modules/cheerio.scrapper');
const { getAnswers } = require('../modules/so.api');
const { getIdsFromUrl } = require('../modules/helpers');

const router = express.Router();

router.get('/', async (req, res, next) => {

  if (!req.query.q) {
    res.status(400);
    return res.send({
      status: 'fail',
      error: 'Please specify a query',
    });
  }
  
  const offset = req.query.offset || 0;

  try {
    const response = await searchBing(req.query.q, { offset });

    if (!response.data.webPages) {
      res.status(200);
      res.send({
        status: 'success',
        data: [],
      });
    }

    const ids = getIdsFromUrl(response.data.webPages.value);
    const data = await getAnswers(ids);

    data.forEach((d) => {
      d.code = getCodes(d.code);
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
