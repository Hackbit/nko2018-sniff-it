const scrapeIt = require('scrape-it')

const res = async (url) => {
  const result = await scrapeIt(url, {
    points: 'div.accepted-answer span.vote-count-post',
    prettyCode: { listItem: 'div.accepted-answer div.answercell pre code' }
  });
  return result;
};

module.exports = (urls) => {
  return Promise.all(urls.map((url) => {
    return res(url).then((response) => {
      console.log(response)
      return response.data;
    });
  }));
}

