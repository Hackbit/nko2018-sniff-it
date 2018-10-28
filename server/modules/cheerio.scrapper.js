const cheerio = require('cheerio');

const getCodes = (markup) => {
  const codes = [];

  if (!markup) {
    return codes;
  }

  const $ = cheerio.load(markup);
  const $selectors = $('pre code').toArray();
  
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
