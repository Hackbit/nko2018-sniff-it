const puppeteer = require('puppeteer');

const scrapper = async (urls) => {
  const data = [];
  let dict = {};

  // Create mapping for urls
  urls.forEach((i) => Object.assign(dict, { [i] : null }));

  await Promise.all(urls.map(async (url) => {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox'
      ],
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });
    await page.setRequestInterception(true);
    
    // Disabling assets
    page.on('request', (req) => {
      if(req.resourceType() == 'stylesheet' || 
          req.resourceType() == 'font' || 
          req.resourceType() == 'image') {
        req.abort();
      }
      else {
        req.continue();
      }
    });

    await page.goto(url);
    
    const response = await page.evaluate(() => {
      const answer = {
        prettyCode: null,
        code: null,
        points: null,
      };
    
      // Get answer elements
      const answers = document.querySelectorAll('div.answer');
      
      for (i = 0; i < answers.length; i++) {
        const element = answers[i];
        // Check if answer is accepted
        const isAccepted = element.querySelector('span.vote-accepted-on');
    
        if (isAccepted) {
          // Get Reputation Points
          answer.points = element.querySelector('span.vote-count-post').innerText;
          // Get <code> inside <pre>
          const preCode = element.querySelectorAll('pre code');
          // Get any instance of <code> in answer
          const codes = element.querySelectorAll('code');

          if (preCode.length > 0) {
            answer.prettyCode = [];
            preCode.forEach((c) => { answer.prettyCode.push(c.innerText); });
          } 
          
          if (codes.length > 0) {
            answer.code = [];
            codes.forEach((c) => { answer.code.push(c.innerText); });
          }

          break;
        }
      }
    
      return answer;
    });

    // Map response to dictionary
    dict[url] = response;

    // Close page and browser
    await page.close();
    await browser.close();
  }));
  
  Object.keys(dict).forEach((k) => ( data.push(dict[k])));

  return data;
};

module.exports = scrapper;
