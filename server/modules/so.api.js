const axios = require('axios');

const SO_HOST = 'https://api.stackexchange.com/2.2';

const getAnswers = async (ids) => {
  const delimitedIds = ids.join(';');

  console.log(delimitedIds);

  const ANSWERS_URL = 
    `${SO_HOST}/questions/${delimitedIds}/answers?pagesize=70&order=desc&sort=activity&site=stackoverflow&filter=!9Z(-wzfpy`;
  const mapping = [];
  
  ids.forEach((i) => mapping.push({ key: i, points: null, code: null, tags: null }));

  const response = await axios.get(ANSWERS_URL);

  response.data.items.forEach((item) => {
    if (item.is_accepted) {
      const { score, body, tags, question_id } = item;

      mapping.forEach((m) => {
        if (m.key === question_id.toString()) {
          m.points = score;
          m.code = body;
          m.tags = tags;
        }
      });
    }
  });

  console.log(mapping);

  return mapping;
};

module.exports = {
  getAnswers,
};
