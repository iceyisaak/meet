import puppeteer from 'puppeteer';

describe('show/hide an event details',
  () => {

    test('An event element is collapsed by default',
      async () => {

        const browser = await puppeteer.launch({
          executablePath: '/usr/bin/chromium-browser'
        });
        // const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');

        const eventDetails = await page.$('.event .event__description--hide');
        expect(eventDetails).toBeNull();
        browser.close();

      }
    );

  });