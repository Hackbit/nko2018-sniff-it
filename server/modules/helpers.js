const getIdsFromUrl = (value) => value.map(((v) => v.url.match(/[0-9]+/)[0] || null));

module.exports = {
  getIdsFromUrl,
};
