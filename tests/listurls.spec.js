const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('Extract and save distinct links in batches', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = process.env.URL || 'https://www.teenvoice.com'; // Dynamic URL

  await page.goto(url);

  // Extract all href attributes from anchor tags and keep only unique URLs
  const links = await page.$$eval('a', (anchors, url) =>
    Array.from(new Set(anchors.map(anchor => anchor.href).filter(href => href.startsWith(url))))
  , url); // Pass the url as a parameter to the $$eval function

  console.log('Extracted Links:', links);
  console.log('Total number of distinct hyperlinks:', links.length);

  // Split links into batches of 25
  const batches = [];
  while (links.length) {
    batches.push(links.splice(0, 25));
  }

  // Use dynamic folder name from environment variable
  const folderName = process.env.FOLDER_NAME || 'defaultFolder';
  const folderPath = path.resolve(__dirname, `../data/url_batches/${folderName}`);

  // Ensure the folder exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Save batches to individual files in the specified folder
  batches.forEach((batch, index) => {
    const filePath = path.join(folderPath, `batch_${index + 1}.json`);
    fs.writeFileSync(filePath, JSON.stringify(batch, null, 2), 'utf8');
  });
});
