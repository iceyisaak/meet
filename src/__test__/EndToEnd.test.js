import puppeteer from 'puppeteer';

describe('show/hide an event details',
  () => {

    let browser;
    let page;

    jest.setTimeout(30000);

    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 250,
        ignoreDefaultArgs: ['--disable-extensions']  // ignore default settings that causes timeout error
      });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });

    afterAll(() => {
      browser.close();
    });

    test('An event element is collapsed by default',
      async () => {
        const eventDetails = await page.$('.event .event__description--show');
        expect(eventDetails).toBeNull();
      });

    test('User can expand an event to see its details',
      async () => {
        const eventDetails = await page.$('.event .event__description--show');
        await page.click('.event .button__hide-details');
        expect(eventDetails).toBeDefined();
      }
    );

    test('User can collapse an event to hide its details',
      async () => {
        await page.click('.event .button__show-details');
        const eventDetails = await page.$('.event .event__description--show');
        expect(eventDetails).toBeNull();
      }
    );

  });
