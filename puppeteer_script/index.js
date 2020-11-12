const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const footlockerUrl = (name, _id) =>
    `https://www.footlocker.com/product/${name}/${_id}.html`;
  const name = 'nike-air-max-plus-mens';
  const _id = '04133139';
  await page.goto(footlockerUrl(name, _id), { waitUntil: 'networkidle2' });

  // Click on image buttons to activate hidden images
  // let element = document.querySelector('ul[class="slick-dots slick-thumb"]').childNodes;

  let data = await page.evaluate(() => {
    // Query DOM to gather schema data
    let name = document.querySelector(`span[class='ProductName-primary']`).innerText;
    let gender = document.querySelector(`span[class='ProductName-alt']`).innerText;
    let _id = Number(document.querySelector(`div[id='ProductDetails-tabs-details-panel']`).childNodes[1].data);
    let rating = Number(document.querySelector(`span[itemprop='ratingValue']`).innerText);
    let price = document.querySelector(`div[class='ProductPrice']`).innerText;
    let size = Array.from(document.querySelectorAll(
      `div[class='ProductSize-group']
        > div
        > label
        > span[class='c-form-label-content']`))
      .map(size => Number(size.innerText));
    let picture = Array.from(document.querySelectorAll(
      `span[class='c-image product c-image--square']
        > img`))
      .map(pic => pic.currentSrc);
    let colorway = document.querySelectorAll(`p[class='ProductDetails-form__label']`)[0].innerText;
    let fit = document.querySelectorAll(`p[class='ProductDetails-form__label']`)[1].innerText;
    let description = document.querySelector(`div[class='ProductDetails-description']`).innerText;
    let reviews = Number(document.querySelector(`span[itemprop='reviewCount']`).innerText);


    return ({ name, gender, _id, rating, price, size, picture, colorway, fit, description, reviews });
  });

  console.log(data);

  await browser.close();
})();