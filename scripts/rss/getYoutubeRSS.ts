import { load } from 'cheerio';
import clipboardy from 'clipboardy';
import fetch from 'node-fetch';

(async () => {
  const [url] = process.argv.slice(2);

  if (!url) {
    // eslint-disable-next-line no-console
    console.log(
      [
        'Error: missing id',
        'Usage: yarn tsx scripts/rss/getYoutubeRSS.ts <url>',
      ].join('\n'),
    );

    return;
  }

  const html = await fetch(url).then((response) => response.text());

  const $ = load(html);

  const [rssLink] = $('link[type="application/rss+xml"]');

  if (!rssLink) {
    // eslint-disable-next-line no-console
    console.log('RSS link not found');

    return;
  }

  // eslint-disable-next-line no-console
  console.log(rssLink.attribs.href);

  await clipboardy.write(rssLink.attribs.href);
})();
