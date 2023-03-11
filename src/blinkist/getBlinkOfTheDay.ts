import { executablePath } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

export type BlinkOfTheDay = {
  title: string;
  subtitle: string;
  about: string;
  author: string;
  image: string;
};

export const getBlinkOfTheDay = async (): Promise<BlinkOfTheDay | null> => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath(),
  });

  const page = await browser.newPage();

  await page.goto('https://blinkist.com/api/free_daily', {
    waitUntil: 'load',
  });

  const body = await page.evaluate(() => {
    return document.querySelector('pre')?.innerHTML;
  });

  await browser.close();

  if (!body) {
    return null;
  }

  const { book } = JSON.parse(body);

  return {
    title: book.title,
    subtitle: book.subtitle,
    about: book.aboutTheBook,
    author: book.author,
    image: book.image.default.src,
  };
};
