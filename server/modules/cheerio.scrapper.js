const cheerio = require('cheerio');

const getCodes = (markup) => {
  const $ = cheerio.load(markup);
  const $selectors = $('pre code').toArray();
  const codes = [];
  
  $selectors.forEach((code) => {
    code.children.forEach((c) => {
      codes.push(c.data);
    })
  });

  return codes;
};

module.exports = {
  getCodes,
};
