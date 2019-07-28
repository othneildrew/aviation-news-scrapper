/**
 * Web Scrapper
 * Searches Google News for related airplane, aviation, aerospace news
 */
require('console.html');

const request = require('request');
const cheerio = require('cheerio');
const url = 'https://www.google.com/search?biw=1280&bih=721&tbm=nws&ei=1LA9XYTVNoKUtQWGuLHQBg&q=airplane+or+aviation+or+aerospace&oq=airplane+or+aviation+or+aerospace&gs_l=psy-ab.3..33i299k1l3.3970261.3976388.0.3976543.25.22.0.2.2.0.127.1640.18j3.21.0....0...1c.1.64.psy-ab..2.15.1015...0.0.0xUsWuUL2Pk';


const parseHtml = (html) => {
  const $ = cheerio.load(html);
  const results = [];
  //console.html(html); // pretty print html to console

  // Get value of search input
  let query = $('input[name="q"]').val();

  console.log('********************************************************************************');
  console.log('********************************************************************************');
  console.log('********************************************************************************');
  console.log(`Showing News For Terms: ${query.toUpperCase()}`);
  console.log('================================================================================');


  // Get articles/results
  let articles = $('.g table');

  articles.each((i, article) => {
    let id = i + 1;
    let link = $(article).find('h3 a').attr('href').replace('/url?q=', '');
    let title = $(article).find('h3 a').text();
    let img = $(article).find('img.th').attr('src');
    let snippet = $(article).find('div.st').text();
    let source = $(article).find('div.f').text();
    let time = $(article).find('div.slp span.f').text().split('-')[1].trim();

    // Create json object and add to results array
    results.push({
      id,
      link,
      title,
      img,
      snippet,
      source,
      time
    });

    console.log(results);
  });
}


// Make an http request
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response && response.statusCode === 200) {
    parseHtml(body);
  }
});